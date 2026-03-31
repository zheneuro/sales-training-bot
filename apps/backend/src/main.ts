import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Express } from 'express';

let cachedServer: Express;

async function bootstrapServer(): Promise<Express> {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    
    nestApp.useGlobalPipes(new ValidationPipe());
    nestApp.enableCors({
      origin: [
        'https://adept-onboarding-admin.vercel.app',
        'http://localhost:5173',
        'http://localhost:3000'
      ],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
    
    await nestApp.init();
    cachedServer = expressApp;
  }
  return cachedServer;
}

// Vercel serverless function entry point
export default async (req: any, res: any) => {
  const server = await bootstrapServer();
  return server(req, res);
};

// For local development
if (process.env.NODE_ENV !== 'production' && require.main === module) {
  bootstrapServer().then((server) => {
    const port = process.env.PORT || 3001;
    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  });
}