import { Module } from '@nestjs/common';
import { ReaderService } from './reader.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReaderEntity } from './reader.entity';
import { ReaderResolver } from './reader.resolver';

@Module({
  imports: [SequelizeModule.forFeature([ReaderEntity])],
  providers: [ReaderService, ReaderResolver],
})
export class ReaderModule {}
