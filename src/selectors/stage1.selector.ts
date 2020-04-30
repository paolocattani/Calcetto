import { RootState, Stage1Row } from 'models';

// Get state from store
export const Stage1Selector = {
  isLoading({ stage1State: { isLoading } }: RootState): boolean {
    return isLoading;
  },
  // Get pairs List
  getSelectedPairs({ stage1State: { selectedPairs } }: RootState): Map<string, Stage1Row[]> | null {
    return selectedPairs || null;
  },
};
