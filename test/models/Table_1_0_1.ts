import { SequelizeModel } from '../../index';
import { Column, AutoIncrement, Model, PrimaryKey, Table } from 'sequelize-typescript';

@SequelizeModel
@Table({ tableName: 'table_1_0_1', timestamps: false })
export class Table_1_0_1 extends Model<Table_1_0_1> {

  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

}