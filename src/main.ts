import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_DEFAULT_PORT, API_DEFAULT_PREFIX } from './common/constants';
import { createSwagger } from './config/swagger/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = API_DEFAULT_PORT;
  const PREFIX = API_DEFAULT_PREFIX;

  app.setGlobalPrefix(PREFIX);
  app.enableCors();

  createSwagger(app);
  await app.listen(PORT);
}

bootstrap();
