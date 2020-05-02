import {PrimaryGeneratedColumn } from 'typeorm';
import {Column, Model, Table} from "sequelize-typescript";

@Table
export class AuthEntity extends Model<AuthEntity>{
  @PrimaryGeneratedColumn()
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  password: string;
}
