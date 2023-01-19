import { IDataProps, IDateProps } from 'types';

export interface IBounceRequest {
  date: string;
  period: number;
}

export interface ITrackRequest {
  date: string;
  tickers: Array<string>;
}

export interface IEmail {
  body: string;
  subject: string;
}

export interface INotificationStatus {
  ok: boolean;
  error: string;
}

export interface IElectronAPIConn {
  myPing: () => Promise<void>;
  on: () => Promise<void>;
  once: () => Promise<void>;
}

export interface IElectronAPI {
  getDates: () => Promise<Array<IDateProps>>;
  getBounceStocks: (req: IBounceRequest) => Promise<Array<IDataProps>>;
  getTrackedStocks: (req: ITrackRequest) => Promise<Array<IDataProps>>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
