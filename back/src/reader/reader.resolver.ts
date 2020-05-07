import { Resolver } from '@nestjs/graphql';
import {ReaderEntity} from "./reader.entity";
import {ReaderService} from "./reader.service";
import {Arg, Query} from "type-graphql";

@Resolver('ReaderEntity')
export class ReaderResolver {
    constructor(private readerService: ReaderService) {
    }
    @Query(returns => ReaderEntity)
    async readerAll(@Arg("id") id: string){
     const reader = await  this.readerService.findOne(id);
        if (reader === undefined) {
            console.log("reader error");
        }
     return reader;
    }
}
