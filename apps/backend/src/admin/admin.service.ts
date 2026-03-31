import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getDashboardStats() {
    const [
      totalEmployees,
      activeLessons,
      lessonProgressStats,
      aiTokenStats,
    ] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.lesson.count({ where: { isPublished: true } }),
      this.prisma.lessonProgress.aggregate({
        where: { status: 'completed', score: { not: null } },
        _avg: { score: true },
      }),
      this.prisma.aIChatTransaction.aggregate({
        _sum: { totalTokens: true },
      }),
    ]);

    const recentProgressQuery = await this.prisma.lessonProgress.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 5,
      include: {
        user: { select: { name: true, telegramId: true } },
        lesson: { select: { title: true } },
      },
    });

    const recentProgress = recentProgressQuery.map((p) => ({
      employeeName: p.user.name || p.user.telegramId,
      lessonTitle: p.lesson.title,
      status: p.status,
      score: p.score,
    }));

    return {
      stats: {
        totalEmployees,
        activeLessons,
        avgScore: lessonProgressStats._avg.score
          ? Math.round(lessonProgressStats._avg.score)
          : 0,
        aiTokensSpent: aiTokenStats._sum.totalTokens || 0,
      },
      recentProgress,
    };
  }

  async getUsers() {
    const users = await this.prisma.user.findMany({
      include: {
        points: { select: { amount: true } },
        progress: { where: { status: 'completed' }, select: { id: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return users.map((user) => {
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
