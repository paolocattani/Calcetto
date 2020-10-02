import { PairDTO } from '@common/dto';
import {
  FetchPairsRequest,
  FetchPairsResponse,
  SavePairResponse,
  SavePairRequest,
  DeletePairsRequest,
  DeletePairsResponse,
  FindAliasRequest,
  FindAliasResponse,
  SelectPairsResponse,
  SelectPairsRequest,
} from '@common/models';
import { deleteWrapper, getWrapper, postWrapper, putWrapper } from '../../@common/utils/fetch.utils';
import { getEmptyPlayer } from './player.service';

export const fetchPairs = async ({ tId }: FetchPairsRequest): Promise<FetchPairsResponse> =>
  getWrapper<FetchPairsResponse>(`/api/v1/pair/list?tId=${encodeURIComponent(tId)}`);
export const findAlias = async ({ player1Id, player2Id }: FindAliasRequest): Promise<FindAliasResponse> =>
  getWrapper<FindAliasResponse>(
    `/api/v1/pair/alias?player1Id=${encodeURIComponent(player1Id)}&player2Id=${encodeURIComponent(player2Id)}`
  );
export const selectPairs = async (request: SelectPairsRequest): Promise<SelectPairsResponse> =>
  putWrapper<SelectPairsRequest, SelectPairsResponse>('/api/v1/pair/selected', request);

export const postPair = async (request: SavePairRequest): Promise<SavePairResponse> =>
  postWrapper<SavePairRequest, SavePairResponse>('/api/v1/pair/new', request);
export const updatePair = async (request: SavePairRequest): Promise<SavePairResponse> =>
  putWrapper<SavePairRequest, SavePairResponse>('/api/v1/pair/new', request);

export const deletePairs = async (request: DeletePairsRequest): Promise<DeletePairsResponse> =>
  deleteWrapper<DeletePairsRequest, DeletePairsResponse>('/api/v1/delete', request);

export const getEmptyPair = (label?: string): PairDTO => ({
  id: null,
  tId: 0,
  rowNumber: 0,
  player1: getEmptyPlayer(),
  player2: getEmptyPlayer(),
  alias: label || '',
  stage1Name: '',
  placement: 0,
  paid1: false,
  paid2: false,
});
