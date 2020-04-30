import {Module} from '@nestjs/common';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          type: 'postgres' as 'postgres',
          host: config.get('POSTGRES_HOST'),
          port: 5432,
          username: 'root',
          password: config.get('POSTGRES_PASSWORD'),
          database: config.get('POSTGRES_DATABASE'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        } as TypeOrmModuleOptions;
      },
    }),
    //  TypeOrmModule.forRoot({
    //      type: 'postgres',
    //      username: process.env.POSTGRES_USER,
    //      password: process.env.POSTGRES_PASSWORD,
    //      port: Number(process.env.POSTGRES_PORT),
    //      host: process.env.POSTGRES_HOST,
    //      database: process.env.POSTGRES_DATABASE,
    //      synchronize: true,
    //      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //      cache: true
    //  } ),
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
     // envFilePath: '.env',
    }),

      // GraphQLModule.forRootAsync({
      //     useFactory: () => ({
      //         autoSchemaFile: 'schema.gql',
      //         playground: true,
      //         debug: true,
      //         cors: {
      //             credentials: true,
      //             origin: true,
      //         },
      //     }),
      // }),
  ]
})
export class AppModule{
}
