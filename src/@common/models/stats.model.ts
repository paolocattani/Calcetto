import { GenericReponse } from '.';
import { StatsPairDTO } from '../dto/stats/stats.pairs.dto';
import { StatsPlayerDTO } from '../dto/stats/stats.players.dto';

export interface StatsPairMap {
	[key: string]: StatsPairDTO;
}

export interface StatsPlayerMap {
	[key: string]: StatsPlayerDTO;
}

// Request
export interface StatsPlayerRequest {
	players: Array<number>;
}
export interface StatsPairRequest {
	pairs: Array<number>;
}
export interface StatsPairFromPlayerRequest {
	player1Id: number;
	player2Id: number;
}

// Response
export interface StatsPlayerResponse extends GenericReponse {
	stats: StatsPlayerMap;
}
export interface StatsPairResponse extends GenericReponse {
	stats: StatsPairMap;
}
export interface StatsPairFromPlayerResponse extends GenericReponse {
	stats: StatsPairDTO;
}

// Error
export interface StatsError extends GenericReponse {}
