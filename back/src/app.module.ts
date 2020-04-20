import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {GraphQLModule} from "@nestjs/graphql";

@Module({
  imports: [
      AuthModule,
      UsersModule,
      ConfigModule.forRoot({
        isGlobal:true
    }),
    //   TypeOrmModule.forRootAsync({
    //       useFactory: async () => ({
    //         type: 'postgres' as 'postgres',
    //         host: process.env.POSTGRES_HOST,
    //         port: Number(process.env.PORT),
    //         username: process.env.POSTGRES_USER,
    //         password: process.env.POSTGRES_PASSWORD,
    //         database: process.env.POSTGRES_DATABASE,
    //         entities: [],
    //         synchronize: true,
    //   })
    // })
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [],
        synchronize: true,
      }),
      GraphQLModule.forRoot({
        autoSchemaFile: true,
        playground: true,
        cors: true
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
