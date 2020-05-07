import { Column, Model, Table } from 'sequelize-typescript';
import {Field, ID, ObjectType} from "type-graphql";
@ObjectType()
@Table
export class ReaderEntity extends Model<ReaderEntity> {
  @Field(type=>ID)
  @Column
  id: string;
  @Field()
  @Column
  surname: string;
  @Field()
  @Column
  name: string;
  @Field()
  @Column
  year: number;
  @Field()
  @Column
  nationality: string;
  @Field()
  @Column
  education: string;
  @Field()
  @Column
  profession: string;
  @Field()
  @Column
  name_college: string;
  @Field()
  @Column
  work: string;
  @Field()
  @Column
  tel: string;
  @Field()
  @Column
  passport_seria: string;
  @Field()
  @Column
  passport_number: number;
  @Field()
  @Column
  issued: string;
  @Field()
  @Column
  is_reader: Date;
}
