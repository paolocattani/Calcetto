import { FetchPlayersRequest, FetchPlayersResponse, PlayerRole, PlayerDTO } from 'models';

export const fetchPlayers = async ({ tId, addEmpty }: FetchPlayersRequest): Promise<FetchPlayersResponse> => {
  try {
    const response = await fetch(tId ? `/api/v1/player/list/${tId}` : '/api/v1/player/list', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    return { results: addEmpty ? [...result, getEmptyPlayer('Nessun Giocatore')] : result };
  } catch (e) {
    handleError(e);
    return { results: [] };
  }
};

const handleError = (errorMessage: string): FetchPlayersResponse => {
  console.warn('Player Error : ', errorMessage);
  throw new Error('Something went wrong');
};

export function getEmptyPlayer(label?: string): PlayerDTO {
  return {
    id: null,
    name: '',
    surname: '',
    alias: '',
    label: label || '',
    role: PlayerRole.GoalKeeper,
    email: '',
    phone: '',
    match_played: 0,
    match_won: 0,
    total_score: 0,
    editable: false,
  };
}