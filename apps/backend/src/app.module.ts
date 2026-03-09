import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TelegramService } from './telegram.service';
import { LessonsService } from './lessons.service';
import { GamificationModule } from './gamification/gamification.module';
import { ProgressModule } from './progress/progress.module';
import { AiModule } from './ai/ai.module';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AdminLessonsController } from './admin/admin-lessons.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ScheduleModule.forRoot(), GamificationModule, ProgressModule, AiModule],
  controllers: [AppController, UsersController, AdminController, AdminLessonsController],
  providers: [
    AppService,
    PrismaService,
    UsersService,
    TelegramService,
    LessonsService,
    AdminService,
  ],
})
export class AppModule {}