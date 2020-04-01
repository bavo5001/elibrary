import { NestFactory } from '@nestjs/core';
// =import {dotenv} from 'dotenv';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
      .setTitle("E-library Api")
      .setDescription("KPK API Forever")
      .setVersion("Api v1.0")
      // .addTag("api")
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  await app.enableCors();
}
bootstrap().then();
