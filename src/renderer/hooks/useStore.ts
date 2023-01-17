/* eslint-disable no-console */
import create from 'zustand';
import { IntRange } from '../../types';

export interface IState {
  term: 'short' | 'long';
  period: IntRange<0, 18>;
  loadPrecentage: IntRange<0, 100>;
}

const initialState: IState = {
  term: 'short',
  period: 0,
  loadPrecentage: 0,
};

/* eslint-disable no-unused-vars */
export interface IStore extends IState {
  setTerm: (term: IState['term']) => void;
  setPeriod: (period: IState['period']) => void;
  setLoadPrecentage: (loadPrecentage: IState['loadPrecentage']) => void;
}
/* eslint-enable no-unused-vars */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStore = create<IStore>((set: any) => ({
  ...initialState,
  setTerm: (term: IState['term']) =>
    set({ term, period: term === 'short' ? 0 : 6 }),
  setPeriod: (period: IState['period']) => set({ period }),
  setLoadPrecentage: (loadPrecentage: IState['loadPrecentage']) =>
    set({ loadPrecentage }),
}));

export default useStore;
