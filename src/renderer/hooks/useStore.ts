/* eslint-disable no-console */
import create from 'zustand';
import { IntRange } from '../../types';

export interface IState {
  term: 'short' | 'long';
  period: IntRange<0, 18>;
  selectedDate: string | undefined;
  isTracking: boolean;
  selectedTrackingDate: string | undefined;
  isFrequencies: boolean;
  selectedRange:
    | 'unlimited'
    | '(48.0 - 99.99)'
    | '(100.0 - 299.99)'
    | '(300.0 - 499.99)'
    | '(500.0 - 1000.0)';
}

const initialState: IState = {
  term: 'short',
  period: 0,
  selectedDate: undefined,
  isTracking: false,
  selectedTrackingDate: undefined,
  isFrequencies: false,
  selectedRange: 'unlimited',
};

const useStore = create<IState>(() => ({ ...initialState }));

export default useStore;
