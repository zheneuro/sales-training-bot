import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GamificationService {
  constructor(private prisma: PrismaService) {}

  async awardPoints(
    userId: string,
    amount: number,
    reason: string,
    sourceId?: string,
  ) {
    return this.prisma.userPoint.create({
      data: {
        userId,
        amount,
        reason,
        sourceId,
      },
    });
  }

  async getUserTotalPoints(userId: string): Promise<number> {
    const aggregate = await this.prisma.userPoint.aggregate({
      where: { userId },
      _sum: { amount: true },
    });
    return aggregate._sum.amount || 0;
  }

  async getLeaderboard(projectId?: string, limit: number = 10) {
    const users = await this.prisma.user.findMany({
      where: projectId ? { projectId } : undefined,
      select: {
        id: true,
        name: true,
        telegramId: true,
        points: { select: { amount: true } },
      },
    });

    const leaderboard = users.map((u) => ({
      name: u.name || String(u.telegramId),
      totalPoints: u.points.reduce((sum, p) => sum + p.amount, 0),
    }));

    leaderboard.sort((a, b) => b.totalPoints - a.totalPoints);

    return leaderboard.slice(0, limit);
  }

  async trackUserActivity(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) return null;

    const now = new Date();
    const lastActivity = user.lastActivityAt ? new Date(user.lastActivityAt) : null;
    let newStreak = user.currentStreak;
    let newMax = user.maxStreak;
    let pointsAwarded = 0;
    let streakMessage = '';
    
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let last = lastActivity ? new Date(lastActivity.getFullYear(), lastActivity.getMonth(), lastActivity.getDate()) : null;

    if (!lastActivity || !last) {
      newStreak = 1;
      newMax = 1;
    } else {
      const diffTime = today.getTime() - last.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        // Already tracked today
        return { user, streakMessage: '', diffDays: 0 };
      } else if (diffDays === 1) {
        // Active yesterday -> Increment
        newStreak += 1;
        if (newStreak > newMax) newMax = newStreak;

        // Reward for milestones
        if (newStreak % 5 === 0) {
          pointsAwarded = 25;
          streakMessage = `🔥 Невероятно! Ты занимаешься ${newStreak} дней подряд!\nТебе начислено ${pointsAwarded} бонусных баллов!`;
        } else {
          pointsAwarded = 5;
          streakMessage = `🔥 Твой прогресс растет: ${newStreak} дней подряд!\n+${pointsAwarded} бонусных баллов!`;
        }
      } else if (diffDays > 1) {
        // Streak broken
        newStreak = 1;
      }
    }

    if (pointsAwarded > 0) {
      await this.awardPoints(user.id, pointsAwarded, `Бонус за регулярность (${newStreak} дн.)`);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        lastActivityAt: now,
        currentStreak: newStreak,
        maxStreak: newMax,
      }
    });

    return { 
      user: updatedUser, 
      streakMessage, 
      diffDays: (!lastActivity || !last) ? -1 : Math.ceil((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)) 
    };
  }

  async getUsersAtRiskOfLosingStreak() {
    const users = await this.prisma.user.findMany({
      where: { currentStreak: { gt: 0 } }
    });

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return users.filter(user => {
      if (!user.lastActivityAt) return false;
      const last = new Date(user.lastActivityAt.getFullYear(), user.lastActivityAt.getMonth(), user.lastActivityAt.getDate());
      const diffTime = today.getTime() - last.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      // If diffDays === 1, they were active yesterday but haven't been today.
      // They are at risk of losing their streak tomorrow.
      return diffDays >= 1; 
    });
  }

  async getInactiveUsers() {
    const users = await this.prisma.user.findMany({
      where: { currentStreak: 0 }
    });
    return users;
  }
}
