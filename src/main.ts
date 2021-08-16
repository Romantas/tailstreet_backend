import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'aws-sdk';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });
  app.setGlobalPrefix('api/v1');
  await app.listen(8080);
}
bootstrap();
