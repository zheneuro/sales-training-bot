import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}

  private get defaultInclude() {
    return {
      blocks: { orderBy: { order: 'asc' as const } },
      tests: {
        include: {
          questions: {
            include: { answers: true },
          },
        },
      },
    };
  }

  async listPublished() {
    return this.prisma.lesson.findMany({
      where: { isPublished: true },
      orderBy: { order: 'asc' },
      include: this.defaultInclude,
    });
  }

  async listAll() {
    return this.prisma.lesson.findMany({
      orderBy: { order: 'asc' },
      include: this.defaultInclude,
    });
  }

  async findByTitle(title: string) {
    return this.prisma.lesson.findFirst({
      where: { title, isPublished: true },
      include: this.defaultInclude,
    });
  }

  async findByCode(code: string) {
    return this.prisma.lesson.findFirst({
      where: { code, isPublished: true },
      include: this.defaultInclude,
    });
  }

  async create(data: {
    title: string;
    code: string;
    description?: string;
    order: number;
    isPublished: boolean;
    videoUrl?: string;
    aiPrompt?: string;
  }) {
    return this.prisma.lesson.create({ data });
  }

  async update(
    id: string,
    data: {
      title?: string;
      code?: string;
      description?: string;
      order?: number;
      isPublished?: boolean;
      videoUrl?: string;
      aiPrompt?: string;
    },
  ) {
    return this.prisma.lesson.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.lesson.delete({ where: { id } });
  }
}