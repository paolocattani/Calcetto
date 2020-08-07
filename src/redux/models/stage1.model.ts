import { PairDTO } from './pair.model';

export interface Stage1State {
  // Utilizzato per indicare se è necessario ricaricare i dati dal db
  // a seguito di un cambiamento causato da un'altro utente
  // TODO:
  needRefresh: boolean;
  isLoading: boolean;
  selectedRows?: Map<string, Stage1Row[]>;
  selectedPairs: PairDTO[];
  stages: SingleStageState[];
}

// Rappresenta lo stato di un sinsolo girone
export interface SingleStageState {
  isLoading: boolean;
  autoOrder: boolean; // TODO:
  stageName: string;
  pairsList: PairDTO[];
  rows: Stage1Row[];
}

export interface Stage1Row {
  id: string;
  rowNumber: number;
  pair: PairDTO;
  [key: string]: string | number | PairDTO | null;
  total: number;
  placement: number;
}

// Requests/ Responses
export interface WatchStage1Request {
  tounamentId: number;
}
export interface FetchStage1Request {
  stageName: string;
  pairsList: PairDTO[];
}
export interface UpdateCellRequest {
  tId: number;
  stageName: string;
  score: string;
  pair1Id: number;
  pair2Id: number;
}

export interface UpdatePlacementRequest {
  rows: Array<{ id: number; placement: number }>;
}

export interface WatchStage1Response {
  needRefresh: boolean;
}
export interface FetchStage1Response {
  stageName: string;
  pairsList: PairDTO[];
  rows: Stage1Row[];
}
export interface UpdateCellResponse {}
export interface UpdatePlacementResponse {}