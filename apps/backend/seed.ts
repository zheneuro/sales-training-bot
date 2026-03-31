import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const DEFAULT_PROJECT_ID = 'default';

async function main() {
  // Ensure the default AI persona exists
  const existingPersona = await prisma.aIPersona.findUnique({
    where: { projectId: DEFAULT_PROJECT_ID },
  });

  const promptText =
    'Вы - клиент, купивший китайский автомобиль. Вы хотите его русифицировать, но считаете, что 150 000 тенге - это слишком дорого за прошивку. Вы недружелюбны в начале. Соглашайтесь только если менеджер сможет донести ценность: в прошивку входит гарантия качества, бесплатные обновления и установка всех необходимых приложений (Яндекс Навигатор, музыка и т.д).';

  if (!existingPersona) {
    await prisma.aIPersona.create({
      data: {
        projectId: DEFAULT_PROJECT_ID,
        name: 'Скептичный покупатель',
        prompt: promptText,
      },
    });
    console.log('Created default AI persona');
  }

  // Check if lesson already exists
  const existingLesson = await prisma.lesson.findFirst({
    where: { code: 'LESSON_OBJ_1' },
  });

  if (!existingLesson) {
    const lesson = await prisma.lesson.create({
      data: {
        code: 'LESSON_OBJ_1',
        title: "Работа с возражением 'Дорого'",
        description:
          "Тренировка отработки базового ценового возражения. Клиент считает, что русификация автомобиля стоит слишком дорого. Не давайте скидку сразу, применяйте технику 'Привязка к ценности'.",
        order: 1,
        isPublished: true,
        aiPrompt: promptText,
      },
    });
    console.log('Seeded lesson:', lesson.id);
  } else {
    console.log('Lesson already exists, skipping.');
  }

  console.log('--- SEED COMPLETED ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
