import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private async resolveProjectId(projectId?: string) {
    if (projectId) {
      return projectId;
    }

    const project = await this.prisma.project.findFirst({
      where: { isActive: true },
      orderBy: { createdAt: 'asc' },
      select: { id: true },
    });

    return project?.id;
  }

  async findByTelegramId(projectId: string | undefined, telegramId: string) {
    const scopedUser = await this.prisma.user.findFirst({
      where: {
        ...(projectId ? { projectId } : {}),
        telegramId,
      },
      orderBy: { createdAt: 'desc' },
    });

    if (scopedUser) {
      return scopedUser;
    }

    return this.prisma.user.findFirst({
      where: {
        telegramId,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createOrUpdateByTelegramId(params: {
    projectId?: string;
    telegramId: string;
    name?: string;
    role?: string;
  }) {
    const { telegramId, name, role } = params;
    const projectId = await this.resolveProjectId(params.projectId);

    if (projectId) {
      const existingUser = await this.prisma.user.findFirst({
        where: {
          projectId,
          telegramId,
        },
        orderBy: { createdAt: 'desc' },
      });

      if (existingUser) {
        return this.prisma.user.update({
          where: { id: existingUser.id },
          data: {
            ...(name !== undefined ? { name } : {}),
            ...(role !== undefined ? { role } : {}),
          },
        });
      }

      const legacyUser = await this.prisma.user.findFirst({
        where: {
          telegramId,
          projectId: null,
        },
        orderBy: { createdAt: 'desc' },
      });

      if (legacyUser) {
        return this.prisma.user.update({
          where: { id: legacyUser.id },
          data: {
            projectId,
            ...(name !== undefined ? { name } : {}),
            ...(role !== undefined ? { role } : {}),
          },
        });
      }

      return this.prisma.user.create({
        data: {
          projectId,
          telegramId,
          name,
          role: role ?? 'employee',
        },
      });
    }

    const existingUser = await this.prisma.user.findFirst({
      where: {
        telegramId,
      },
      orderBy: { createdAt: 'desc' },
    });

    if (existingUser) {
      return this.prisma.user.update({
        where: { id: existingUser.id },
        data: {
          ...(name !== undefined ? { name } : {}),
          ...(role !== undefined ? { role } : {}),
        },
      });
    }

    return this.prisma.user.create({
      data: {
        telegramId,
        name,
        role: role ?? 'employee',
      },
    });
  }

  async listAll(projectId?: string) {
    return this.prisma.user.findMany({
      ...(projectId ? { where: { projectId } } : {}),
      orderBy: { createdAt: 'desc' },
    });
  }
}