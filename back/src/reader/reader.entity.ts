import { Column, Model, Table } from 'sequelize-typescript';
import {Field, ID, ObjectType} from "type-graphql";
import {ApiProperty} from "@nestjs/swagger";
@ObjectType()
@Table
export class ReaderEntity extends Model<ReaderEntity> {
  @ApiProperty()
  @Field(type=>ID)
  @Column
  id: string;

  @ApiProperty()
  @Field()
  @Column
  surname: string;

  @ApiProperty()
  @Field()
  @Column
  name: string;

  @ApiProperty()
  @Field()
  @Column
  year: number;

  @ApiProperty()
  @Field()
  @Column
  nationality: string;

  @ApiProperty()
  @Field()
  @Column
  education: string;

  @ApiProperty()
  @Field()
  @Column
  profession: string;

  @ApiProperty()
  @Field()
  @Column

  @ApiProperty()
  name_college: string;

  @ApiProperty()
  @Field()
  @Column
  work: string;

  @ApiProperty()
  @Field()
  @Column
  tel: string;

  @ApiProperty()
  @Field()
  @Column
  passport_seria: string;

  @ApiProperty()
  @Field()
  @Column
  passport_number: number;

  @ApiProperty()
  @Field()
  @Column
  issued: string;

  @ApiProperty()
  @Field()
  @Column
  is_reader: Date;
}
