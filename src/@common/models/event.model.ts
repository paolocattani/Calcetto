/* eslint-disable */

import * as H from 'history';
import { TournamentDTO } from '../dto';
//
export interface EventState {
	connected: boolean;
}

// Events
export enum Events {
	/**
	 * This event is fired to broadcast message to client
	 * #From : Server
	 */
	NEW_MESSAGE = 'new_message',
	/**
	 * This event is fired from client when the user session expired
	 * #From : Server
	 * The user is forced to logout.
	 */
	SESSION_EXPIRED = 'session:expired',
	/**
	 * This event is fired when a user join tournament room.
	 * #From : Client
	 * #To : All client ( user and admin ) inside tournament room
	 * See EventAction.joinTournament
	 */
	TOURNAMENT_JOIN = 'tournament:join',
	/**
	 * This event is fired when a user leave tournament room.
	 * #From : Client
	 * #To : All client ( user and admin ) inside tournament room
	 * See EventAction.leaveTournament
	 */
	TOURNAMENT_LEAVE = 'tournament:leave',
	/**
	 * This event is fired when a public tournament move to TournamentProgress.Stage1
	 * #From : Client
	 * #To : All client ( user and admin )
	 * See EventAction.newTournament
	 */
	TOURNAMENT_NEW = 'tournament:new',
	/**
	 *
	 * This event is fired when a public Tournament regresses to TournamentProgress.PairsSelection
	 * #From : Client
	 * #To : All client ( user and admin )
	 * See EventAction.deleteTournament
	 */
	TOURNAMENT_DELETED = 'tournament:deleted',
	/**
	 *
	 * This event is fired when a public Tournament change progress
	 * #From : Client
	 * #To : All client ( user and admin )
	 * See EventAction.updateTournament
	 */
	TOURNAMENT_UPDATED = 'tournament:updated',
	// Stage1
	STAGE1_UPDATE = 'stage1:update',
	STAGE1_DELETE = 'stage1:delete',
	// Stage2
	STAGE2_UPDATE = 'stage2:update',
	STAGE2_DELETE = 'stage2:delete',
}

// Requests
export interface OpenChannelRequest {
	history: H.History;
}
export interface CloseChannelRequest {}
export interface JoinTournamentRequest {
	tournamentId: number;
}
export interface LeaveTournamentRequest {
	tournamentId: number;
}
export interface NewTournamentRequest {
	tournament: TournamentDTO;
}

// Responses
export interface OpenChannelResponse {
	connected: boolean;
}
export interface CloseChannelResponse {}
export interface JoinTournamentResponse {}
export interface LeaveTournamentResponse {}
export interface NewTournamentResponse {}

// Error
export interface EventError {}
