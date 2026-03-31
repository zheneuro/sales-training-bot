import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import type { Response } from 'express';

@Controller('bot')
export class BotController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('webhook')
  async handleWebhook(@Body() update: any, @Res() res: Response) {
    try {
      await this.telegramService.handleUpdate(update);
      res.status(200).send('OK');
    } catch (err) {
      console.error('Webhook error:', err);
      res.status(200).send('OK'); // Always send 200 to Telegram unless we want retries
    }
  }
}
