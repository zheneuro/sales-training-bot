import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let cachedApp: any;

export default async (req: any, res: any) => {
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: true, // For debugging, will restrict later if needed
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
    await app.init();
    cachedApp = app.getHttpAdapter().getInstance();
  }
  return cachedApp(req, res);
};