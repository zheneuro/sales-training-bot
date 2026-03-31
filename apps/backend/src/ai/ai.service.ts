import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import OpenAI, { toFile } from 'openai';

const DEFAULT_PROJECT_ID = 'default';

@Injectable()
export class AiService {
  private openai: OpenAI;
  private readonly logger = new Logger(AiService.name);

  constructor(private prisma: PrismaService) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || 'dummy_key',
    });
  }

  async logTransaction(data: {
    userId?: string;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    costEstimate?: number;
    model: string;
  }) {
    return this.prisma.aIChatTransaction.create({
      data: { ...data, projectId: DEFAULT_PROJECT_ID },
    });
  }

  async getDefaultPersona() {
    return this.prisma.aIPersona.findUnique({
      where: { projectId: DEFAULT_PROJECT_ID },
    });
  }

  async getChatReply(messages: any[], userId?: string) {
    if (!process.env.OPENAI_API_KEY) {
      this.logger.warn('OPENAI_API_KEY is not set, returning dummy AI response.');
      return {
        reply: 'Это тестовый ответ ИИ (API ключ не настроен). Продолжайте тренировку.',
        tokens: { prompt: 10, completion: 15, total: 25 },
      };
    }

    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages,
      });

      const reply = response.choices[0].message?.content || 'Нет ответа от ИИ.';
      const usage = response.usage;

      if (usage) {
        await this.logTransaction({
          userId,
          promptTokens: usage.prompt_tokens,
          completionTokens: usage.completion_tokens,
          totalTokens: usage.total_tokens,
          model: 'gpt-4o-mini',
        });
      }

      return {
        reply,
        tokens: {
          prompt: usage?.prompt_tokens,
          completion: usage?.completion_tokens,
          total: usage?.total_tokens,
        },
      };
    } catch (e: any) {
      this.logger.error('Error calling OpenAI', e.stack);
      return {
        reply: 'Извините, сейчас я (ИИ) недоступен. Возникла ошибка связи с сервером.',
        tokens: { prompt: 0, completion: 0, total: 0 },
      };
    }
  }

  async evaluateConversation(messages: any[], userId?: string) {
    if (!process.env.OPENAI_API_KEY) {
      return { score: 85, feedback: 'Хорошая тренировка! (Тестовая оценка)' };
    }

    try {
      const evalMessages = [
        ...messages,
        {
          role: 'system',
          content:
            'Оцени диалог выше. Ты выступал в роли клиента, а пользователь - менеджера по продажам. Насколько хорошо менеджер отработал возражения и продал продукт? Ответь строго в формате JSON: {"score": <число от 0 до 100>, "feedback": "<строка с коротким фидбеком на русском>"}',
        },
      ];

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: evalMessages as any,
        response_format: { type: 'json_object' },
      });

      const usage = response.usage;
      if (usage) {
        await this.logTransaction({
          userId,
          promptTokens: usage.prompt_tokens,
          completionTokens: usage.completion_tokens,
          totalTokens: usage.total_tokens,
          model: 'gpt-4o-mini',
        });
      }

      const content = response.choices[0].message?.content || '{}';
      return JSON.parse(content);
    } catch (e) {
      this.logger.error('Error evaluating AI conversation', e);
      return { score: 0, feedback: 'Ошибка оценки диалога ИИ.' };
    }
  }

  async transcribeAudio(fileUrl: string) {
    if (!process.env.OPENAI_API_KEY) {
      return 'Это тестовое распознавание голоса (API ключ не настроен).';
    }

    try {
      const response = await fetch(fileUrl);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const file = await toFile(buffer, 'audio.ogg');

      const transcription = await this.openai.audio.transcriptions.create({
        file,
        model: 'whisper-1',
      });

      return transcription.text;
    } catch (e: any) {
      this.logger.error('Error transcribing audio', e.stack);
      return '[Голосовое сообщение не распознано: ошибка сервера]';
    }
  }
}
