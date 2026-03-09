import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async listAll() {
    return this.usersService.listAll();
  }

  @Get(':telegramId')
  async getByTelegramId(@Param('telegramId') telegramId: string) {
    const user = await this.usersService.findByTelegramId(undefined, telegramId);

    if (!user) {
      return {
        found: false,
        telegramId,
      };
    }

    return {
      found: true,
      user,
    };
  }
}