import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProgressService {
  constructor(private prisma: PrismaService) {}

  async markLessonStarted(userId: string, lessonId: string) {
    return this.prisma.lessonProgress.upsert({
      where: {
        userId_lessonId: { userId, lessonId },
      },
      update: {},
      create: {
        userId,
        lessonId,
        status: 'started',
      },
    });
  }

  async finishLesson(userId: string, lessonId: string, score?: number) {
    return this.prisma.lessonProgress.upsert({
      where: {
        userId_lessonId: { userId, lessonId },
      },
      update: {
        status: 'completed',
        score,
      },
      create: {
        userId,
        lessonId,
        status: 'completed',
        score,
      },
    });
  }
}
