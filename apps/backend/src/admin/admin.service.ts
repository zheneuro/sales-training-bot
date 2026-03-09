import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getDashboardStats(projectId?: string) {
    const whereProjectId = projectId ? { projectId } : {};

    const [
      totalEmployees,
      activeLessons,
      lessonProgressStats,
      aiTokenStats
    ] = await Promise.all([
      // Total Employees
      this.prisma.user.count({ where: whereProjectId }),
      
      // Active Lessons
      this.prisma.lesson.count({
        where: { ...whereProjectId, isPublished: true },
      }),

      // Avg Score (from completed lessons)
      this.prisma.lessonProgress.aggregate({
        where: {
          status: 'completed',
          score: { not: null },
          user: whereProjectId
        },
        _avg: { score: true }
      }),

      // AI Tokens Spent
      this.prisma.aIChatTransaction.aggregate({
        where: whereProjectId,
        _sum: { totalTokens: true }
      })
    ]);

    // Recent progress (limit 5)
    const recentProgressQuery = await this.prisma.lessonProgress.findMany({
      where: { user: whereProjectId },
      orderBy: { updatedAt: 'desc' },
      take: 5,
      include: {
        user: { select: { name: true, telegramId: true } },
        lesson: { select: { title: true } }
      }
    });

    const recentProgress = recentProgressQuery.map(p => ({
      employeeName: p.user.name || p.user.telegramId,
      lessonTitle: p.lesson.title,
      status: p.status,
      score: p.score
    }));

    return {
      stats: {
        totalEmployees,
        activeLessons,
        avgScore: lessonProgressStats._avg.score ? Math.round(lessonProgressStats._avg.score) : 0,
        aiTokensSpent: aiTokenStats._sum.totalTokens || 0
      },
      recentProgress
    };
  }

  async getUsers(projectId?: string) {
    const whereProjectId = projectId ? { projectId } : {};
    
    const users = await this.prisma.user.findMany({
      where: whereProjectId,
      include: {
        points: {
          select: { amount: true }
        },
        progress: {
          where: { status: 'completed' },
          select: { id: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return users.map(user => {
      const totalPoints = user.points.reduce((sum, p) => sum + p.amount, 0);
      const completedLessons = user.progress.length;
      return {
        id: user.id,
        telegramId: user.telegramId,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
        totalPoints,
        completedLessons,
        currentStreak: user.currentStreak,
        maxStreak: user.maxStreak,
        lastActivityAt: user.lastActivityAt,
      };
    });
  }
}
