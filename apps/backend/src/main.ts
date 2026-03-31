import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Express } from 'express';

const server: Express = express();
let isAppInitialized = false;

export const initializeApp = async () => {
  if (isAppInitialized) return;
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors({
    origin: [
      'https://adept-onboarding-admin.vercel.app',
      'http://localhost:5173',
      'http://localhost:3000'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.init();
  isAppInitialized = true;
};

// Vercel serverless function entry point
export default async (req: any, res: any) => {
  await initializeApp();
  // Express instance itself is a handler function (req, res)
  return server(req, res);
};

// For local development
if (process.env.NODE_ENV !== 'production' && require.main === module) {
  initializeApp().then(() => {
    const port = process.env.PORT || 3001;
    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  });
}