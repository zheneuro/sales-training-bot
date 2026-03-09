import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [ProgressService, PrismaService]
})
export class ProgressModule {}
