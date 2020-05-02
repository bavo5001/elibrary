import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { BooksEntity } from './books.entity';

@Module({
  imports: [SequelizeModule.forFeature([BooksEntity])],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
