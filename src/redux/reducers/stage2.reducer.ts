import { createReducer, Action } from 'typesafe-actions';
import { Stage2State } from 'redux/models';
import { Stage2Action } from 'redux/actions';

const initialState: Stage2State = {
  isLoading: false,
};

export const Stage2Reducer = createReducer<Stage2State, Action>(initialState)
  // Request
  .handleAction([Stage2Action.fetchStage2.request, Stage2Action.delete.request], (state) => ({
    ...state,
    isLoading: true,
  }))
  // Failure
  .handleAction([Stage2Action.fetchStage2.failure], (state, { payload: { message } }) => ({
    ...state,
    errorMessage: message,
    isLoading: false,
  }))
  // Success
  .handleAction([Stage2Action.fetchStage2.success], (state, { payload: { cells, rowsNumber } }) => ({
    cells,
    rowsNumber,
    isLoading: false,
  }))
  .handleAction([Stage2Action.delete.success], () => ({
    cells: undefined,
    rowsNumber: 0,
    isLoading: false,
  }))
  .handleAction([Stage2Action.setCells], (state, { payload }) => ({
    ...state,
    cells: payload,
  }))
  .handleAction([Stage2Action.setLoading], (state, { payload }) => ({
    ...state,
    isLoading: payload,
  }));
