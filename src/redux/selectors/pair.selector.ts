import { RootState } from 'redux/models';

// Get state from store
export const PairSelector = {
  isLoading: ({ pairState: { isLoading } }: RootState) => isLoading,
  getPairsList: ({ pairState: { pairList } }: RootState) => pairList,
};