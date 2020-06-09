import { Module } from '@nestjs/common';
import 'reflect-metadata';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReaderModule } from './reader/reader.module';
import { BooksModule } from './books/books.module';
@Module({
  imports: [
    // SequelizeModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     dialect: 'mysql',
    //     host: configService.get<string>('HOST'),
    //     port: configService.get<string>('PORT'),
    //     username: configService.get<string>('USERNAME'),
    //     password: configService.get<string>('PASSWORD'),
    //     database: configService.get<string>('DATABASE'),
    //     models: [],
    //   }),
    //   inject: [ConfigService],
    // });
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [],
    }),
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ReaderModule,
    BooksModule,

    GraphQLModule.forRootAsync({
        useFactory: () => ({
            autoSchemaFile: 'schema.gql',
            playground: true,
            debug: true,
            cors: {
                credentials: true,
                origin: true,
            },
        }),
    }),
  ],
})
export class AppModule {}
