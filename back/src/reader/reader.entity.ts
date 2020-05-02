import { Column, Model, Table } from 'sequelize-typescript';
@Table
export class ReaderEntity extends Model<ReaderEntity> {
  @Column
  id: number;
  @Column
  surname: string;
  @Column
  name: string;
  @Column
  year: number;
  @Column
  nationality: string;
  @Column
  education: string;
  @Column
  profession: string;
  @Column
  name_college: string;
  @Column
  work: string;
  @Column
  tel: string;
  @Column
  passport_seria: string;
  @Column
  passport_number: number;
  @Column
  issued: string;
  @Column
  is_reader: Date;
}
