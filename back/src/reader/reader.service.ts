import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {ReaderEntity} from "./reader.entity";

@Injectable()
export class ReaderService {
  constructor(@InjectModel(ReaderEntity) private readerModel: typeof ReaderEntity) {
  }
  async findAll(): Promise<ReaderEntity[]>{
    return this.readerModel.findAll();
  }
  async findOne(id: string): Promise<ReaderEntity>{
    return this.readerModel.findOne({
      where: {
        id
      },
    });
  }
  async remove(id: string): Promise<any>{
    const reader = await this.findOne(id);
    await reader.destroy();
  }
}
