import {
  Column,
  Model,
  Table,
  Comment,
  DataType,
  Default,
  ForeignKey,
  HasOne,
  AllowNull,
  Unique
} from 'sequelize-typescript';
import { UserRole } from './types';
import Player from './player.model';

/**
 *
 */
@Table({ tableName: 'user', freezeTableName: true, version: false })
export default class User extends Model<User> {
  @AllowNull
  @Column(DataType.STRING)
  public name!: string;

  @AllowNull
  @Column(DataType.STRING)
  public surname!: string;

  @Column(DataType.STRING)
  public password!: string;

  @Unique
  @Column(DataType.STRING)
  public email!: string;

  @AllowNull
  @Column(DataType.STRING)
  public phone?: string;

  @AllowNull
  @Column(DataType.DATE)
  public birthday?: Date;

  @Default('User')
  @Column(DataType.ENUM('User', 'Admin'))
  public role!: UserRole;

  // Associazione giocatore
  @AllowNull
  @Comment('Player')
  @ForeignKey(() => Player)
  @Column(DataType.INTEGER)
  public playerId?: number;
  @HasOne(() => Player, 'playerId')
  public player?: Player;
}