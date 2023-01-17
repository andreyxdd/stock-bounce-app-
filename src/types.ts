export interface IDataProps {
  id?: number;
  ticker: string;
  open: number;
  close: number;
  volume: number;
}

export interface IDateProps {
  epoch: number;
  date_string: string;
}

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;
