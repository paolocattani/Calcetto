import { createAsyncAction, createAction } from 'typesafe-actions';
import {
  FetchStage2Response,
  FetchStage2Request,
  UpdateStage2CellResponse,
  UpdateStage2CellRequest,
  ICell,
  DeleteStage2Request,
  DeleteStage2Response,
} from 'redux/models';
import { defaultAsyncParams, defaultParam } from './constants';

const actionName = '[Stage2]';

export const Stage2Action = {
  // get selected tournament
  fetchStage2: createAsyncAction(...defaultAsyncParams(actionName, 'Fetch Stage2'))<
    FetchStage2Request,
    FetchStage2Response,
    Error
  >(),
  updateCell: createAsyncAction(...defaultAsyncParams(actionName, 'Update Cell Stage2'))<
    UpdateStage2CellRequest,
    UpdateStage2CellResponse,
    Error
  >(),
  delete: createAsyncAction(...defaultAsyncParams(actionName, 'Delete Stage2'))<
    DeleteStage2Request,
    DeleteStage2Response,
    Error
  >(),
  setCells: createAction(...defaultParam(actionName, 'Set Cells'))<ICell[][]>(),
};