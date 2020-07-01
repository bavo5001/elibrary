import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {ReaderEntity} from "./reader.entity";
import {ReaderInput} from "./reader.input";

@Injectable()
export class ReaderService {
  constructor(@InjectModel(ReaderEntity) private readerModel: typeof ReaderEntity) {
  }
  async findAll(): Promise<ReaderEntity[]>{
    return this.readerModel.findAll();
  }
  async create(reader): Promise<ReaderEntity>{
    const readerUser = new this.readerModel(reader);
    return readerUser.save();
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
