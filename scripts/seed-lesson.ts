import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const project = await prisma.project.findFirst();
  
  if (!project) {
    console.error('No project found. Please create a project first.');
    return;
  }

  const lesson = await prisma.lesson.create({
    data: {
      projectId: project.id,
      code: 'GREBENYUK_1',
      title: 'Техника продаж: Перехват инициативы',
      description: 'В этом уроке мы изучим, как менеджер должен вести диалог и не давать клиенту засыпать вопросами.',
      order: 1,
      isPublished: true,
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      aiPrompt: 'Ты - холодный и занятой клиент. На любые попытки менеджера что-то рассказать ты отвечаешь вопросами: "А сколько стоит?", "А какие гарантии?", "А почему так дорого?". Твоя задача - сбить менеджера с толку. Если он сможет вежливо перехватить инициативу (например, "Я обязательно отвечу на все вопросы, но чтобы подобрать лучший вариант, разрешите сначала уточню..."), то начни смягчаться.',
      tests: {
        create: [
          {
            title: 'Тест по перехвату инициативы',
            passingScore: 80,
            questions: {
              create: [
                {
                  text: 'Что нужно сделать, когда клиент перебивает вопросом о цене в самом начале?',
                  order: 1,
                  answers: {
                    create: [
                      { text: 'Сразу назвать цену', isCorrect: false },
                      { text: 'Перехватить инициативу через уточняющий вопрос', isCorrect: true },
                      { text: 'Проигнорировать вопрос', isCorrect: false }
                    ]
                  }
                },
                {
                  text: 'Какая главная цель первого этапа продажи по Гребенюку?',
                  order: 2,
                  answers: {
                    create: [
                      { text: 'Продать товар сразу', isCorrect: false },
                      { text: 'Установить контакт и квалифицировать клиента', isCorrect: true },
                      { text: 'Выставить счет', isCorrect: false }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });

  console.log('Created sample Grebenyuk lesson:', lesson.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
