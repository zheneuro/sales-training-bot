import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/sales_training';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  let project = await prisma.project.findFirst();
  if (!project) {
    project = await prisma.project.create({
      data: {
        code: "DEFAULT",
        title: "Default Training Project",
        description: "Auto-generated project for testing",
        isActive: true
      }
    });
    console.log("Created project", project.id);
  }

  const lesson = await prisma.lesson.create({
    data: {
      projectId: project.id,
      code: "LESSON_OBJ_1",
      title: "Работа с возражением 'Дорого'",
      description: "Тренировка отработки базового ценового возражения. Клиент считает, что русификация автомобиля стоит слишком дорого. Не давайте скидку сразу, применяйте технику 'Привязка к ценности'.",
      order: 1,
      isPublished: true,
    }
  });

  const existingPersona = await prisma.aIPersona.findUnique({
    where: { projectId: project.id }
  });

  const promptText = "Вы - клиент, купивший китайский автомобиль. Вы хотите его русифицировать, но считаете, что 150 000 тенге - это слишком дорого за прошивку. Вы недружелюбны в начале. Соглашайтесь только если менеджер сможет донести ценность: в прошивку входит гарантия качества, бесплатные обновления и установка всех необходимых приложений (Яндекс Навигатор, музыка и т.д).";

  if (!existingPersona) {
    await prisma.aIPersona.create({
      data: {
        projectId: project.id,
        name: "Скептичный покупатель",
        prompt: promptText,
      }
    });
  }

  console.log("Seeded lesson and persona", lesson.id);
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); pool.end(); });
