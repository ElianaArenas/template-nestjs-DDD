import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './application/exceptions/httpException.filter';
import { TransformInterceptor } from './application/interceptors/response.interceptor';
import { API_DEFAULT_PORT, API_DEFAULT_PREFIX } from './common/constants';
import { createSwagger } from './config/swagger/swagger-config';
import { MicroserviceOptions } from '@nestjs/microservices';
import { KAFKA_CONFIG } from './config/streams/kafka.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = API_DEFAULT_PORT;
  const PREFIX = API_DEFAULT_PREFIX;

  app.setGlobalPrefix(PREFIX);
  app.enableCors();

  app.useLogger(app.get(Logger));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  
  createSwagger(app);
  
  app.connectMicroservice<MicroserviceOptions>(KAFKA_CONFIG);
  await app.startAllMicroservices();

  await app.listen(PORT);
}

bootstrap();
