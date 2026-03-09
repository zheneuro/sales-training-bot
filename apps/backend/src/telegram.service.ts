import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Telegraf, Markup, session, Context } from 'telegraf';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UsersService } from './users.service';
import { LessonsService } from './lessons.service';
import { AiService } from './ai/ai.service';
import { GamificationService } from './gamification/gamification.service';

interface BotContext extends Context {
  session?: {
    step?: 'awaiting_name' | 'ai_practice';
    aiContext?: any[];
    currentLessonId?: string;
  };
}

@Injectable()
export class TelegramService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(TelegramService.name);
  private bot: Telegraf<BotContext>;

  constructor(
    private readonly usersService: UsersService,
    private readonly lessonsService: LessonsService,
    private readonly aiService: AiService,
    private readonly gamificationService: GamificationService,
  ) {
    const token = process.env.TELEGRAM_BOT_TOKEN;

    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not set');
    }

    this.bot = new Telegraf<BotContext>(token);
  }

  async onModuleInit() {
    this.bot.use(session());
    this.registerHandlers();

    void this.bot
      .launch()
      .then(() => {
        this.logger.log('Telegram bot started');
      })
      .catch((error) => {
        this.logger.error('Telegram bot failed to start', error);
      });
  }

  async onModuleDestroy() {
    try {
      await this.bot.stop();
      this.logger.log('Telegram bot stopped');
    } catch (error) {
      this.logger.error('Telegram bot failed to stop', error);
    }
  }

  private getMainMenuKeyboard() {
    return Markup.keyboard([
      ['📚 Мои уроки', '🎓 Мой профиль'],
      ['🏆 Рейтинг', 'Помощь']
    ]).resize();
  }

  private getProjectId(): string | undefined {
    const value = process.env.PROJECT_ID;
    return value && value.trim() ? value : undefined;
  }

  private isNoActiveProjectError(error: unknown): boolean {
    return error instanceof Error && error.message.includes('No active project found');
  }

  private async safeListLessons(projectId: string | undefined) {
    try {
      return await this.lessonsService.listPublished(projectId);
    } catch (error) {
      if (this.isNoActiveProjectError(error)) {
        this.logger.warn('No active project found while loading lessons. Falling back to unscoped lessons.');
        return this.lessonsService.listPublished(undefined);
      }

      throw error;
    }
  }

  private async safeFindUser(projectId: string | undefined, telegramId: string) {
    try {
      return await this.usersService.findByTelegramId(projectId, telegramId);
    } catch (error) {
      if (this.isNoActiveProjectError(error)) {
        this.logger.warn('No active project found while loading profile. Falling back to legacy user lookup.');
        return this.usersService.findByTelegramId(undefined, telegramId);
      }

      throw error;
    }
  }

  private async safeCreateOrUpdateUser(params: {
    projectId?: string;
    telegramId: string;
    name?: string;
    role?: string;
  }) {
    try {
      return await this.usersService.createOrUpdateByTelegramId(params);
    } catch (error) {
      if (this.isNoActiveProjectError(error)) {
        this.logger.warn('No active project found while registering user. Falling back to legacy user upsert.');
        return this.usersService.createOrUpdateByTelegramId({
          ...params,
          projectId: undefined,
        });
      }

      throw error;
    }
  }

  @Cron(CronExpression.EVERY_DAY_AT_6PM)
  async sendStreakReminders() {
    this.logger.log('Running daily streak reminder cron job...');
    
    // 1. Users at risk of losing their streak
    const atRiskUsers = await this.gamificationService.getUsersAtRiskOfLosingStreak();
    for (const user of atRiskUsers) {
      if (user.telegramId) {
        try {
          await this.bot.telegram.sendMessage(
            user.telegramId,
            `🔥 *Твой прогресс сгорит!* Ты занимался ${user.currentStreak} дней подряд.\nЗайди потренироваться хотя бы на 5 минут, чтобы не потерять прогресс!`,
            { parse_mode: 'Markdown', ...this.getMainMenuKeyboard() }
          );
        } catch (err) {
          this.logger.error(`Failed to send streak reminder to ${user.telegramId}`, err);
        }
      }
    }

    // 2. Inactive users (nudge them to start)
    const inactiveUsers = await this.gamificationService.getInactiveUsers();
    for (const user of inactiveUsers) {
      if (user.telegramId) {
        try {
          // Add some randomness to not spam users every single day at the exact same time
          // Or we can just send it. Let's send a gentle nudge!
          if (Math.random() > 0.5) {
            await this.bot.telegram.sendMessage(
              user.telegramId,
              `👋 Привет, ${user.name || 'друг'}! Давно не виделись.\nИИ-клиенты ждут, когда ты проведешь с ними тренировку! Сможешь выделить 10 минут сегодня?`,
              this.getMainMenuKeyboard()
            );
          }
        } catch (err) {
          this.logger.error(`Failed to send nudge to ${user.telegramId}`, err);
        }
      }
    }
  }

  private registerHandlers() {
    this.bot.start(async (ctx) => {
      // Инициализируем сессию, если её нет
      ctx.session ??= {};
      
      const telegramId = String(ctx.from.id);
      const projectId = this.getProjectId();
      
      // Проверяем, зарегистрирован ли уже пользователь
      const existingUser = await this.safeFindUser(projectId, telegramId);
      
      if (existingUser && existingUser.name) {
        await ctx.reply(
          `С возвращением, ${existingUser.name}! 👋\nВы уже зарегистрированы в системе. Выберите нужное действие в меню.`,
          this.getMainMenuKeyboard(),
        );
        return;
      }

      // Если новый - запускаем онбординг
      ctx.session.step = 'awaiting_name';
      
      await ctx.reply(
        'Добро пожаловать в платформу обучения SalesTrain AI! 🎓\n\nДавайте познакомимся, чтобы ваш руководитель мог видеть ваши успехи.\n\n*Как вас зовут?* (Введите Имя и Фамилию)',
        { parse_mode: 'Markdown' }
      );
    });

    this.bot.hears('🎓 Мой профиль', async (ctx) => {
      const telegramId = String(ctx.from.id);
      const projectId = this.getProjectId();
      const user = await this.safeFindUser(projectId, telegramId);

      if (!user) {
        await ctx.reply('Профиль не найден. Нажмите /start для регистрации.');
        return;
      }

      // Track activity to ensure streaks are up to date
      await this.gamificationService.trackUserActivity(user.id);

      const totalPoints = await this.gamificationService.getUserTotalPoints(user.id);
      // Fetch user again to get updated streak
      const updatedUser = await this.safeFindUser(projectId, telegramId);

      await ctx.reply(
        `Твой профиль:\n` +
          `Имя: ${updatedUser?.name || '—'}\n` +
          `Роль: Сотрудник\n` +
          `🔥 Дней подряд: ${updatedUser?.currentStreak || 0}\n` +
          `Баллы: ${totalPoints} 🏆\n` +
          `Telegram ID: ${updatedUser?.telegramId}`,
      );
    });

    this.bot.hears('🏆 Рейтинг', async (ctx) => {
      const projectId = this.getProjectId();
      const topUsers = await this.gamificationService.getLeaderboard(projectId, 10);

      if (!topUsers || topUsers.length === 0) {
        return ctx.reply('Рейтинг пока пуст. Будьте первым, кто заработает баллы!');
      }

      let leaderboardMessage = '🏆 *Рейтинг сотрудников*\n\n';
      topUsers.forEach((u, idx) => {
        let emoji = '🔹';
        if (idx === 0) emoji = '🥇';
        if (idx === 1) emoji = '🥈';
        if (idx === 2) emoji = '🥉';
        leaderboardMessage += `${emoji} ${idx + 1}. *${u.name}* — ${u.totalPoints} баллов\n`;
      });

      await ctx.reply(leaderboardMessage, { parse_mode: 'Markdown' });
    });

    this.bot.hears('📚 Мои уроки', async (ctx) => {
      const projectId = this.getProjectId();
      const lessons = await this.safeListLessons(projectId);

      if (!lessons.length) {
        await ctx.reply('Пока нет доступных уроков. Ваш руководитель скоро их добавит.');
        return;
      }

      const lessonButtons = lessons.map((lesson) => [lesson.title]);

      await ctx.reply(
        [
          'Доступные уроки:',
          ...lessons.map((lesson, index) => `${index + 1}. ${lesson.title}`),
          '',
          'Нажми на название урока кнопкой ниже.',
        ].join('\n'),
        Markup.keyboard([
          ...lessonButtons,
          ['Назад в меню'],
        ]).resize(),
      );
    });



    this.bot.hears('Назад в меню', async (ctx) => {
      if (ctx.session) ctx.session.step = undefined;
      await ctx.reply('Главное меню:', this.getMainMenuKeyboard());
    });

    this.bot.hears('📖 Изучить теорию', async (ctx) => {
      ctx.session ??= {};
      const lessonId = ctx.session.currentLessonId;
      const projectId = this.getProjectId();

      if (!lessonId) {
        await ctx.reply('Сначала выберите урок из меню "📚 Мои уроки".');
        return;
      }

      const lessons = await this.safeListLessons(projectId);
      const selectedLesson = lessons.find((l) => l.id === lessonId);

      if (!selectedLesson) {
        return;
      }

      // To make it more detailed, we could fetch blocks.
      // But for now, we have the description text as theory or the content if we add it. 
      const theoryContent = selectedLesson.description || 'Теоретический материал для этого урока еще готовится.';
      
      await ctx.reply(
        `📚 *Теоретическая часть*\n\n${theoryContent}\n\nТеперь вы готовы к практике?`,
        { parse_mode: 'Markdown', ...Markup.keyboard([
          ['🤖 Тренировка с ИИ'],
          ['📚 Мои уроки', 'Назад в меню'],
        ]).resize() }
      );
    });

    this.bot.hears('🤖 Тренировка с ИИ', async (ctx) => {
      ctx.session ??= {};
      const lessonId = ctx.session.currentLessonId;
      const projectId = this.getProjectId();

      if (!lessonId) {
        await ctx.reply('Сначала выберите урок из меню "📚 Мои уроки".');
        return;
      }

      const telegramId = String(ctx.from.id);
      const user = await this.safeFindUser(projectId, telegramId);
      if (user) {
        const activity = await this.gamificationService.trackUserActivity(user.id);
        if (activity && activity.streakMessage) {
          await ctx.reply(activity.streakMessage);
        }
      }

      const persona = projectId ? await this.aiService.getProjectContext(projectId) : null;
      let prompt = 'Ты клиент компании. Веди себя реалистично, задавай вопросы, задавай возражения. Пользователь - менеджер продаж.';
      
      if (persona?.prompt) {
        prompt = persona.prompt;
      }

      ctx.session.step = 'ai_practice';
      ctx.session.aiContext = [
        { role: 'system', content: prompt }
      ];

      await ctx.reply(
        '🤖 Тренировка начата!\n\nИИ-клиент ждет вашего первого сообщения.\nВы можете отправлять текстовые или 🎤 *голосовые сообщения*.\n\nЧтобы завершить тренировку и получить оценку, нажмите "Завершить тренировку".\nПоздоровайтесь с клиентом:',
        { parse_mode: 'Markdown', ...Markup.keyboard([['Завершить тренировку']]).resize() },
      );
    });

    this.bot.hears('Завершить тренировку', async (ctx) => {
      if (ctx.session?.step !== 'ai_practice') {
        await ctx.reply('Вы не находитесь в режиме тренировки.', this.getMainMenuKeyboard());
        return;
      }

      const messages = ctx.session.aiContext || [];
      const projectId = this.getProjectId();
      const telegramId = String(ctx.from?.id);
      
      await ctx.reply('⏳ Завершаем симуляцию и оцениваем ваш диалог... Пожалуйста, подождите.');
      
      const user = await this.safeFindUser(projectId, telegramId);
      
      const evaluation = await this.aiService.evaluateConversation(messages, projectId || '', user?.id);
      
      let replyMsg = `📊 Результаты тренировки:\n\nОценка: ${evaluation.score} / 100\n\nОбратная связь от ИИ:\n${evaluation.feedback}`;
      
      if (user && evaluation.score > 0) {
        await this.gamificationService.awardPoints(user.id, evaluation.score, `Завершение ИИ тренировки с баллом ${evaluation.score}`);
        replyMsg += `\n\n🏆 Заработано ${evaluation.score} баллов!`;
      }

      ctx.session.step = undefined;
      ctx.session.aiContext = undefined;

      await ctx.reply(replyMsg, this.getMainMenuKeyboard());
    });

    this.bot.hears('Помощь', async (ctx) => {
      await ctx.reply(
        'Доступные команды:\n/start — регистрация/перезапуск\n📚 Мои уроки — список уроков\n🎓 Мой профиль — твои данные\nИспользуй кнопки меню ниже.',
        this.getMainMenuKeyboard(),
      );
    });

    // Обработчик текстовых и голосовых сообщений
    this.bot.on('message', async (ctx, next) => {
      const msg = ctx.message as any;
      let text = msg.text;

      // Если это голосовое сообщение в режиме тренировки с ИИ
      if (msg.voice && ctx.session?.step === 'ai_practice') {
        const fileId = msg.voice.file_id;
        try {
          await ctx.sendChatAction('typing');
          const fileLink = await ctx.telegram.getFileLink(fileId);
          text = await this.aiService.transcribeAudio(fileLink.toString());
          
          await ctx.reply(`_Распознано:_ ${text}`, { parse_mode: 'Markdown' });
        } catch (err) {
          this.logger.error('Failed to transcribe voice', err);
          await ctx.reply('Не удалось распознать голосовое сообщение.');
          return;
        }
      } else if (!text) {
        return next();
      }

      if (ctx.session?.step === 'awaiting_name') {
        const name = text;
        const telegramId = String(ctx.from.id);
        const projectId = this.getProjectId();
        
        // Очищаем шаг
        ctx.session.step = undefined;

        // Сохраняем пользователя в БД
        const user = await this.safeCreateOrUpdateUser({
          projectId,
          telegramId,
          name,
          role: 'employee',
        });

        await ctx.reply(
          `🎉 Отлично, ${user.name}!\nВы успешно зарегистрированы в системе.\n\nТеперь ваш руководитель увидит вас в Панели Администратора, а вы можете приступать к доступным урокам.`,
          this.getMainMenuKeyboard(),
        );
        return;
      }
      
      if (ctx.session?.step === 'ai_practice') {
        // Мы в режиме симуляции с ИИ
        ctx.session.aiContext ??= [];
        const userMsg = text;
        
        ctx.session.aiContext.push({ role: 'user', content: userMsg });

        const projectId = this.getProjectId();
        const telegramId = String(ctx.from.id);
        const user = await this.safeFindUser(projectId, telegramId);

        // Показываем индикатор печати
        await ctx.sendChatAction('typing');

        const { reply } = await this.aiService.getChatReply(
          ctx.session.aiContext,
          projectId || '',
          user?.id
        );

        ctx.session.aiContext.push({ role: 'assistant', content: reply });

        await ctx.reply(reply);
        return;
      }
      
      // Проверяем, не является ли сообщение названием урока
      const projectId2 = this.getProjectId();
      const lessons = await this.safeListLessons(projectId2);
      const selectedLesson = lessons.find((lesson) => lesson.title === text);

      if (selectedLesson) {
        ctx.session ??= {};
        ctx.session.currentLessonId = selectedLesson.id;

        const lessonText =
          selectedLesson.description ||
          'Содержимое урока пока не заполнено.';

        await ctx.reply(
          [
            `📘 ${selectedLesson.title}`,
            '',
            lessonText,
            '',
            'Нажмите "📖 Изучить теорию", чтобы ознакомиться с материалом.',
            'Затем выберите "🤖 Тренировка с ИИ", чтобы отработать это на практике.',
          ].join('\n'),
          Markup.keyboard([
            ['📖 Изучить теорию', '🤖 Тренировка с ИИ'],
            ['📚 Мои уроки', 'Назад в меню'],
          ]).resize(),
        );
        return;
      }

      // Иначе передаем сообщение дальше
      return next();
    });
  }
}