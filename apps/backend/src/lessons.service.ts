import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}

  async listPublished(projectId?: string) {
    if (projectId) {
      const scopedLessons = await this.prisma.lesson.findMany({
        where: {
          projectId,
          isPublished: true,
        },
        orderBy: {
          order: 'asc',
        },
        select: {
          id: true,
          projectId: true,
          code: true,
          title: true,
          description: true,
          order: true,
          isPublished: true,
        },
      });

      if (scopedLessons.length > 0) {
        return scopedLessons;
      }

      return this.prisma.lesson.findMany({
        where: {
          projectId: null,
          isPublished: true,
        },
        orderBy: {
          order: 'asc',
        },
        select: {
          id: true,
          projectId: true,
          code: true,
          title: true,
          description: true,
          order: true,
          isPublished: true,
        },
      });
    }

    return this.prisma.lesson.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        order: 'asc',
      },
      select: {
        id: true,
        projectId: true,
        code: true,
        title: true,
        description: true,
        order: true,
        isPublished: true,
      },
    });
  }

  async findByTitle(projectId: string | undefined, title: string) {
    if (projectId) {
      const scopedLesson = await this.prisma.lesson.findFirst({
        where: {
          projectId,
          title,
          isPublished: true,
        },
        include: {
          blocks: {
            orderBy: {
              order: 'asc',
            },
          },
        },
      });

      if (scopedLesson) {
        return scopedLesson;
      }

      return this.prisma.lesson.findFirst({
        where: {
          projectId: null,
          title,
          isPublished: true,
        },
        include: {
          blocks: {
            orderBy: {
              order: 'asc',
            },
          },
        },
      });
    }

    return this.prisma.lesson.findFirst({
      where: {
        title,
        isPublished: true,
      },
      include: {
        blocks: {
          orderBy: {
            order: 'asc',
          },
        },
      },
    });
  }

  async findByCode(projectId: string | undefined, code: string) {
    if (projectId) {
      const scopedLesson = await this.prisma.lesson.findFirst({
        where: {
          projectId,
          code,
          isPublished: true,
        },
        include: {
          blocks: {
            orderBy: {
              order: 'asc',
            },
          },
        },
      });

      if (scopedLesson) {
        return scopedLesson;
      }

      return this.prisma.lesson.findFirst({
        where: {
          projectId: null,
          code,
          isPublished: true,
        },
        include: {
          blocks: {
            orderBy: {
              order: 'asc',
            },
          },
        },
      });
    }

    return this.prisma.lesson.findFirst({
      where: {
        code,
        isPublished: true,
      },
      include: {
        blocks: {
          orderBy: {
            order: 'asc',
          },
        },
      },
    });
  }

  async listAll(projectId?: string) {
    return this.prisma.lesson.findMany({
      where: projectId ? { projectId } : undefined,
      orderBy: { order: 'asc' },
    });
  }

  async create(projectId: string | undefined, data: { title: string; code: string; description?: string; order: number; isPublished: boolean }) {
    if (!projectId) {
      throw new Error('Project ID is required to create a lesson');
    }
    return this.prisma.lesson.create({
      data: {
        ...data,
        projectId,
      },
    });
  }

  async update(id: string, data: { title?: string; code?: string; description?: string; order?: number; isPublished?: boolean }) {
    return this.prisma.lesson.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.lesson.delete({
      where: { id },
    });
  }
}