import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { LessonsService } from '../lessons.service';
import { AiService } from '../ai/ai.service';
import { PrismaService } from '../prisma.service';

const DEFAULT_PROJECT_ID = 'default';

@Controller('admin/lessons')
export class AdminLessonsController {
  constructor(
    private readonly lessonsService: LessonsService,
    private readonly aiService: AiService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async getLessons() {
    return this.lessonsService.listAll();
  }

  @Post()
  async createLesson(
    @Body()
    data: {
      title: string;
      code: string;
      description: string;
      order: number;
      isPublished: boolean;
      aiPrompt?: string;
    },
  ) {
    const { aiPrompt, ...lessonData } = data;
    const lesson = await this.lessonsService.create(lessonData);

    if (aiPrompt) {
      const existingPersona = await this.prisma.aIPersona.findUnique({
        where: { projectId: DEFAULT_PROJECT_ID },
      });

      if (existingPersona) {
        await this.prisma.aIPersona.update({
          where: { projectId: DEFAULT_PROJECT_ID },
          data: { prompt: aiPrompt },
        });
      } else {
        await this.prisma.aIPersona.create({
          data: {
            projectId: DEFAULT_PROJECT_ID,
            name: 'Собеседник по умолчанию',
            prompt: aiPrompt,
          },
        });
      }
    }

    return lesson;
  }

  @Put(':id')
  async updateLesson(
    @Param('id') id: string,
    @Body()
    data: {
      title: string;
      code: string;
      description: string;
      order: number;
      isPublished: boolean;
      aiPrompt?: string;
    },
  ) {
    const { aiPrompt, ...lessonData } = data;
    const lesson = await this.lessonsService.update(id, lessonData);

    if (aiPrompt) {
      const existingPersona = await this.prisma.aIPersona.findUnique({
        where: { projectId: DEFAULT_PROJECT_ID },
      });

      if (existingPersona) {
        await this.prisma.aIPersona.update({
          where: { projectId: DEFAULT_PROJECT_ID },
          data: { prompt: aiPrompt },
        });
      } else {
        await this.prisma.aIPersona.create({
          data: {
            projectId: DEFAULT_PROJECT_ID,
            name: 'Собеседник по умолчанию',
            prompt: aiPrompt,
          },
        });
      }
    }

    return lesson;
  }

  @Delete(':id')
  async deleteLesson(@Param('id') id: string) {
    return this.lessonsService.delete(id);
  }
}
