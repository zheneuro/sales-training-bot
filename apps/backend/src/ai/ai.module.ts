import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [AiService, PrismaService],
  exports: [AiService],
})
export class AiModule {}
