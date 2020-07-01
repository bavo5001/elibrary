import { Module } from '@nestjs/common';
import { ReaderService } from './reader.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReaderEntity } from './reader.entity';
import { ReaderResolver } from './reader.resolver';
import { ReaderController} from './reader.controller';

@Module({
  imports: [SequelizeModule.forFeature([ReaderEntity])],
  providers: [ReaderService, ReaderResolver],
  controllers: [ReaderController],
})
export class ReaderModule {}
