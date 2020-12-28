import * as H from 'history';
import { GenericReponse } from './common.models';
import { TournamentDTO } from '../dto';

//## STATE
export interface TournamentState {
  tournament: TournamentDTO | null;
  tournamentsList: Array<TournamentDTO>;
  isLoading: boolean;
}

//## REQUEST - RESPONSE - ERROR
// Requests
export interface ReloadTournamentRequest {
  tId: number;
}
export interface FetchTournamentsRequest {}

export interface SaveTournamentRequest {
  tournament: TournamentDTO;
  history: H.History<unknown>;
}

export interface UpdateTournamentRequest {
  tournament: TournamentDTO;
}

export interface DeleteTournamentRequest {
  tournament: TournamentDTO;
}

// Responses
export interface FetchTournamentsResponse extends GenericReponse {
  tournamentsList?: Array<TournamentDTO>;
}
export interface SaveTournamentResponse extends GenericReponse {
  tournament: TournamentDTO | null;
}
export interface ReloadTournamentResponse extends GenericReponse {
  tournament: TournamentDTO;
}
export interface UpdateTournamentResponse extends GenericReponse {
  tournament: TournamentDTO;
}
export interface DeleteTournamentResponse extends GenericReponse {
  tournament: TournamentDTO;
}

//
// Error
export interface TournamentError extends GenericReponse {}
