import { SequelizeModel } from '../../index';
import { Column, AutoIncrement, Model, PrimaryKey, Table } from 'sequelize-typescript';

@SequelizeModel
@Table({ tableName: 'table_1_0_0', timestamps: false })
export class Table_1_0_0 extends Model<Table_1_0_0> {

  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

}