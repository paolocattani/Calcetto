import { PairDTO, Stage1Row, TournamentDTO } from '../dto';
import { GenericResponse } from './common.models';

export interface Stage1State {
	// Utilizzato per indicare se è necessario ricaricare i dati dal db
	// a seguito di un cambiamento causato da un'altro utente
	toogleRefresh: boolean;
	isLoading: boolean;
	//Righe Stage1 selezionate nella forma di Mappa <Nome Girone, Lista Righe Selezionate>
	selectedRows?: Map<string, Array<Stage1Row>>;
	//Righe Stage1 selezionate, unite tali da essere usate poi su Stage2
	selectedPairs: Array<PairDTO>;
	// idea ( abbandonata per ora ) : creare un array contente gli stati di ogni girone.
	stages: Array<SingleStageState>;
}

// Rappresenta lo stato di un sinsolo girone
export interface SingleStageState {
	isLoading: boolean;
	autoOrder: boolean;
	stageName: string;
	pairsList: Array<PairDTO>;
	rows: Array<Stage1Row>;
}

// Requests
export interface FetchStage1Request {
	stageName: string;
	pairsList: Array<PairDTO>;
}
export interface UpdateCellRequest {
	tId: number;
	tournament: TournamentDTO;
	stageName: string;
	score: string;
	pair1Id: number;
	pair2Id: number;
}
export interface UpdatePlacementRequest {
	rows: Array<{ id: number; placement: number }>;
}

export interface DeleteStage1Request {
	tId: number;
}
// Response
export interface FetchStage1Response extends GenericResponse {
	stageName: string;
	pairsList: Array<PairDTO>;
	rows: Array<Stage1Row>;
}
export type UpdateCellResponse = GenericResponse
export type UpdatePlacementResponse = GenericResponse
export type DeleteStage1Response = GenericResponse

export type Stage1Error = GenericResponse
