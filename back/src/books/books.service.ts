import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {BooksEntity} from "./books.entity";
import {where} from "sequelize";

@Injectable()
export class BooksService {
    constructor(@InjectModel(BooksEntity) private booksModel : typeof BooksEntity ) {
    }
    async findAll(): Promise<BooksEntity[]>{
        return this. booksModel.findAll();
    }
    async findOne(id: string): Promise<BooksEntity>{
        return this.booksModel.findOne({
                where:
                    {id}
            }
            );
    }
    async remove(id: string): Promise<void>{
        const book = await this.findOne(id);
        await book.destroy();
    }
}

