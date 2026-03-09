import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getHealth() {
    await this.prisma.healthcheckLog.create({
      data: {
        message: 'health ok',
      },
    });

    return {
      status: 'ok',
      message: 'service is healthy',
    };
  }
}