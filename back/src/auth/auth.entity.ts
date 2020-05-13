import { Column, Model, Table } from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";

@Table
export class AuthEntity extends Model<AuthEntity> {
  @ApiProperty()
  @Column
  id: number;

  @ApiProperty()
  @Column
  firstName: string;

  @ApiProperty()
  @Column
  lastName: string;

  @ApiProperty()
  @Column
  password: string;
}
