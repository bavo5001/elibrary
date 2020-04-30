import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AuthService } from './auth.service';
import {GoogleStrategy} from "./google.strategy";
import {AuthController} from "./auth.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthEntity} from "./auth.entity";
import {LoggerMiddleware} from "../logger.middleware";

@Module({
  //imports: [TypeOrmModule.forFeature([AuthEntity])],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
  exports: [AuthModule]
})
export class AuthModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(LoggerMiddleware)
        .forRoutes(AuthController);
  }
}
