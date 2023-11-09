import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './application/exceptions/httpException.filter';
import { TransformInterceptor } from './application/interceptors/response.interceptor';
import { API_DEFAULT_PORT, API_DEFAULT_PREFIX } from './common/constants';
import { createSwagger } from './config/swagger/swagger-config';
import winstonLogger from './config/logger/logger-options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });

  const PORT = API_DEFAULT_PORT;
  const PREFIX = API_DEFAULT_PREFIX;

  app.setGlobalPrefix(PREFIX);
  app.enableCors();

  

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  createSwagger(app);
  await app.listen(PORT);
}

bootstrap();
