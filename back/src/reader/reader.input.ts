import {Field, InputType} from "type-graphql";
import {ApiProperty} from "@nestjs/swagger";

@InputType()
export class ReaderInput {
    @ApiProperty()
    @Field()
    id?: string;
    @ApiProperty()
    @Field()
    surname: string;

    @ApiProperty()
    @Field()
    name: string;

    @ApiProperty()
    @Field()
    year: number;

    @ApiProperty()
    @Field()
    nationality: string;

    @ApiProperty()
    @Field()
    education: string;

    @ApiProperty()
    @Field()
    profession: string;

    @ApiProperty()
    @Field()
    name_college: string;

    @ApiProperty()
    @Field()
    work: string;

    @ApiProperty()
    @Field()
    tel: string;

    @ApiProperty()
    @Field()

    passport_seria: string;

    @ApiProperty()
    @Field()

    passport_number: number;

    @ApiProperty()
    @Field()
    issued: string;

    @ApiProperty()
    @Field()
    is_reader: Date;
}
