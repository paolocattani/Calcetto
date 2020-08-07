import { createAsyncAction } from 'typesafe-actions';
import { defaultAsyncParams } from './constants';
import {
  FetchPlayersResponse,
  FetchPlayersRequest,
  UpdatePlayerRequest,
  UpdatePlayerResponse,
  DeletePlayersResponse,
  DeletePlayersRequest,
} from 'redux/models/player.model';

const actionName = '[Player]';
export const PlayerAction = {
  // fetch tournaments
  fetchPlayers: createAsyncAction(...defaultAsyncParams(actionName, 'Fetch Palyers'))<
    FetchPlayersRequest,
    FetchPlayersResponse,
    Error
  >(),
  savePlayer: createAsyncAction(...defaultAsyncParams(actionName, 'Save Player'))<
    UpdatePlayerRequest,
    UpdatePlayerResponse,
    Error
  >(),
  deletePlayers: createAsyncAction(...defaultAsyncParams(actionName, 'Delete Player'))<
    DeletePlayersRequest,
    DeletePlayersResponse,
    Error
  >(),
};