import { Resolver } from '@nestjs/graphql';
import {ReaderEntity} from "./reader.entity";
import {ReaderService} from "./reader.service";
import {Arg, Args, Mutation, Query} from "type-graphql";
import {ReaderInput} from "./reader.input";

@Resolver('ReaderEntity')
export class ReaderResolver {
    constructor(private readerService: ReaderService) {
    }
    @Query(() => [ReaderEntity])
    async full(): Promise<ReaderEntity[]> {
        return await this.readerService.findAll();
    }
    @Query(returns => ReaderEntity)
    async readerAll(@Arg("id") id: string){
     const reader = await  this.readerService.findOne(id);
        if (reader === undefined) {
            console.log("reader error");
        }
     return reader;
    }
    // @Mutation(() => ReaderEntity)
    // async createReader(@Args('input') input: ReaderInput){
    //     return this.readerService.create(input);
    // }
}
