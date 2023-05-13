import 'svelte/register';

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { svelteViewEngine } from './svelte-view-engine';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.engine('svelte', svelteViewEngine)
  app.setViewEngine('svelte');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist : true,
      forbidNonWhitelisted : true,
      transform: true,
      }),
    );
  await app.listen(3000);
  console.log(`server listening: ${await app.getUrl()}`);
}
bootstrap();
