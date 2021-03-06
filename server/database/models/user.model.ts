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
	Unique,
} from 'sequelize-typescript';
import Player from './player.model';
import { UserRole } from '@common/dto';

/**
 *
 */
@Table({ tableName: 'user', modelName: 'User', freezeTableName: true, version: false })
export default class User extends Model {
	@AllowNull
	@Column(DataType.STRING)
	public username!: string;

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

	@Default(UserRole.User)
	@Column(DataType.ENUM({ values: Object.values(UserRole) }))
	public role!: UserRole;

	// Virtuale
	@Column({
		type: DataType.VIRTUAL,
		get(this: User): string {
			return this.name && this.surname ? `${this.name} ${this.surname}` : this.email;
		},
	})
	public label!: string;

	// Associazione giocatore
	@AllowNull
	@Comment('Player')
	@ForeignKey(() => Player)
	@Column(DataType.INTEGER)
	public playerId?: number;
	@HasOne(() => Player, 'playerId')
	public player?: Player;
}
