import { PrismaClient } from '@prisma/client';
import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env from backend
dotenv.config({ path: path.join(__dirname, '../apps/backend/.env') });

async function diagnose() {
  console.log('--- DIAGNOSTIC START ---');
  
  // 1. Check DB
  const prisma = new PrismaClient();
  try {
    console.log('Checking database connection...');
    await prisma.$connect();
    const count = await prisma.lesson.count();
    console.log(`✅ Database connected. Lessons count: ${count}`);
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  } finally {
    await prisma.$disconnect();
  }

  // 2. Check Telegram Token
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    console.error('❌ TELEGRAM_BOT_TOKEN is not in .env');
  } else {
    console.log(`Checking Telegram token: ${token.substring(0, 10)}...`);
    const bot = new Telegraf(token);
    try {
      const me = await bot.telegram.getMe();
      console.log(`✅ Telegram Token valid. Bot: @${me.username}`);
    } catch (err) {
      console.error('❌ Telegram Token invalid or unreachable:', err.message);
    }
  }

  // 3. Check OpenAI Key
  const openaiKey = process.env.OPENAI_API_KEY;
  if (!openaiKey) {
    console.error('❌ OPENAI_API_KEY is not in .env');
  } else {
    console.log(`✅ OPENAI_API_KEY is present in .env: ${openaiKey.substring(0, 15)}...`);
  }

  console.log('--- DIAGNOSTIC END ---');
}

diagnose();
