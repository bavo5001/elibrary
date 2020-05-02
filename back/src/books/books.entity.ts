import { Column, Model, Table } from 'sequelize-typescript';
@Table
export class BooksEntity extends Model<BooksEntity> {
  @Column
  id: number;
  @Column
  Data_issued: Date;
  @Column
  number_book: number;
  @Column
  author_h: string;
  @Column
  signature_student: string;
  @Column
  signature_admin: string;
  @Column
  notes: string;
}
