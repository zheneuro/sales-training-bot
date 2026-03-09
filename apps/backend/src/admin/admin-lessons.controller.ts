import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { LessonsService } from '../lessons.service';
import { AiService } from '../ai/ai.service';
import { PrismaService } from '../prisma.service';

@Controller('admin/lessons')
export class AdminLessonsController {
  constructor(
    private readonly lessonsService: LessonsService,
    private readonly aiService: AiService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async getLessons() {
    // For now we get all lessons across all projects or default project if configured
    const projectId = process.env.PROJECT_ID;
    return this.lessonsService.listAll(projectId);
  }

  @Post()
  async createLesson(@Body() data: { title: string; code: string; description: string; order: number; isPublished: boolean; aiPrompt?: string }) {
    let projectId = process.env.PROJECT_ID;
    
    if (!projectId) {
      // Find default project
      const project = await this.prisma.project.findFirst({ orderBy: { createdAt: 'asc' } });
      if (project) {
        projectId = project.id;
      } else {
        throw new NotFoundException('No active project found to assign lesson to');
      }
    }

    const { aiPrompt, ...lessonData } = data;
    const lesson = await this.lessonsService.create(projectId, lessonData);

    // Currently we have 1 AI Persona per Project, we might update it
    if (aiPrompt) {
      const existingPersona = await this.prisma.aIPersona.findUnique({
        where: { projectId }
      });

      if (existingPersona) {
        await this.prisma.aIPersona.update({
          where: { projectId },
          data: { prompt: aiPrompt }
        });
      } else {
        await this.prisma.aIPersona.create({
          data: {
            projectId,
            name: "Собеседник по умолчанию",
            prompt: aiPrompt
          }
        });
      }
    }

    return lesson;
  }

  @Put(':id')
  async updateLesson(
    @Param('id') id: string,
    @Body() data: { title: string; code: string; description: string; order: number; isPublished: boolean; aiPrompt?: string }
  ) {
    const { aiPrompt, ...lessonData } = data;
    const lesson = await this.lessonsService.update(id, lessonData);

    const projectId = lesson.projectId;

    // Update Project AI Persona
    if (aiPrompt && projectId) {
      const existingPersona = await this.prisma.aIPersona.findUnique({
        where: { projectId }
      });

      if (existingPersona) {
        await this.prisma.aIPersona.update({
          where: { projectId },
          data: { prompt: aiPrompt }
        });
      } else {
        await this.prisma.aIPersona.create({
          data: {
            projectId,
            name: "Собеседник по умолчанию",
            prompt: aiPrompt
          }
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
