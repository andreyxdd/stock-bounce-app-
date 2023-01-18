/* eslint-disable no-console */
import create from 'zustand';
import { IntRange } from '../../types';

export interface IState {
  term: 'short' | 'long';
  period: IntRange<0, 18>;
  selectedDate: string | undefined;
}

const initialState: IState = {
  term: 'short',
  period: 0,
  selectedDate: undefined,
};

const useStore = create<IState>(() => ({ ...initialState }));

export default useStore;
