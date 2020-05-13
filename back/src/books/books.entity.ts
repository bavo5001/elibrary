import { Column, Model, Table } from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";
@Table
export class BooksEntity extends Model<BooksEntity> {
  @ApiProperty()
  @Column
  id: number;

  @ApiProperty()
  @Column
  Data_issued: Date;

  @ApiProperty()
  @Column
  number_book: number;

  @ApiProperty()
  @Column
  author_h: string;

  @ApiProperty()
  @Column
  signature_student: string;

  @ApiProperty()
  @Column
  signature_admin: string;

  @ApiProperty()
  @Column
  notes: string;
}
