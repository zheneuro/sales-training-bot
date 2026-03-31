import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByTelegramId(telegramId: string) {
    return this.prisma.user.findFirst({
      where: { telegramId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createOrUpdateByTelegramId(params: {
    telegramId: string;
    name?: string;
    role?: string;
  }) {
    const { telegramId, name, role } = params;

    const existingUser = await this.prisma.user.findFirst({
      where: { telegramId },
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

  async listAll() {
    return this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}