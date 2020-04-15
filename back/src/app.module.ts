import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [
      AuthModule,
      UsersModule,
      ConfigModule.forRoot({
        isGlobal:true
    }),
    //   TypeOrmModule.forRootAsync({
    //     imports: [ConfigModule],
    //     inject: [ConfigService],
    //       useFactory: async (configService: ConfigService) => ({
    //         type: 'postgres' as 'postgres',
    //         host: configService.get<string>('POSTGRES_HOST'),
    //         port: Number(configService.get('PORT')),
    //         username: configService.get<string>('POSTGRES_USER'),
    //         password: configService.get<string>('POSTGRES_PASSWORD'),
    //         database: configService.get<string>('POSTGRES_DATABASE'),
    //         entities: [__dirname + '/**/*.entity{.ts,.js}'],
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
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
