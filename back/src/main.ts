import { NestFactory } from '@nestjs/core';
const { v4: uuidv4 } = require('uuid');
uuidv4();
import * as dotenv from 'dotenv';
dotenv.config();
require('dotenv').config();
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  await app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('E-library Api')
    .setDescription('KPK API Forever')
    .setVersion('Api v1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
bootstrap().then();
