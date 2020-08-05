import { Column, Comment, Model, DataType, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Tournament from './tournament.model';
import Player from './player.model';

@Table({ tableName: 'pairs', freezeTableName: true, version: false })
export default class Pair extends Model<Pair> {
  @Comment('Pair alias')
  @Column(DataType.STRING)
  public alias!: string;

  @Comment('Stage 1 name')
  @Column(DataType.STRING)
  public stage1Name!: string;

  @Comment('Placement in stage 1')
  @Column(DataType.INTEGER)
  public placement!: number;

  @Column(DataType.BOOLEAN)
  public paid1!: boolean;

  @Column(DataType.BOOLEAN)
  public paid2!: boolean;

  // Models association
  // Tournament
  @ForeignKey(() => Tournament)
  @Column(DataType.INTEGER)
  public tournamentId!: number;
  @BelongsTo(() => Tournament)
  public tournament!: Tournament;

  // Player 1
  @ForeignKey(() => Player)
  @Column(DataType.INTEGER)
  public player1Id!: number;
  @BelongsTo(() => Player, 'player1Id')
  public player1!: Player;

  // Player 2
  @ForeignKey(() => Player)
  @Column(DataType.INTEGER)
  public player2Id!: number;
  @BelongsTo(() => Player, 'player2Id')
  public player2!: Player;

  // Model toString
  public toString() {
    return `[ id=${this.id} , tId=${
      this.tournamentId
    } , player1=${this.player1?.toString()} , player2=${this.player2?.toString()} , alias=${this.alias} , stage1Name=${
      this.stage1Name
    }]`;
  }
}