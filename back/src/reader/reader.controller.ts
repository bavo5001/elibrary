import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ReaderEntity} from "./reader.entity";
import {ReaderService} from "./reader.service";

@Controller("/reader")
export class ReaderController {
    constructor(private readerService: ReaderService) {
    }
    @Get()
    async findAll(): Promise<ReaderEntity[]>{
        return await this.readerService.findAll();
    }
    @Get(":id")
    async findOne(@Param("id") id: string): Promise<ReaderEntity>{
        return await this.readerService.findOne(id);
    }
    @Post()
    async create(@Body() reader: ReaderEntity): Promise<ReaderEntity>{
        return await  this.readerService.create(reader);
    }
}
