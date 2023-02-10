import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { API_DEFAULT_PORT, API_DEFAULT_PREFIX } from './common/constants';
import { createSwagger } from './config/swagger/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const PORT = API_DEFAULT_PORT;
  const PREFIX = API_DEFAULT_PREFIX;

  app.setGlobalPrefix(PREFIX);
  app.enableCors();

  app.useLogger(app.get(Logger));

  createSwagger(app);
  await app.listen(PORT);
}

bootstrap();
