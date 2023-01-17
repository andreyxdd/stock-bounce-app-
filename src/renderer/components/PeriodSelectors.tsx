import Button from '@mui/material/Button';
import shallow from 'zustand/shallow';
import useStore, { IStore } from '../hooks/useStore';

type Props = {
  selectors: Array<string>;
  offset: number;
};

const PeriodSelectors = ({ selectors, offset }: Props) => {
  const [period, setPeriod] = useStore(
    (state: IStore) => [state.period, state.setPeriod],
    shallow
  );

  return (
    <>
      {selectors.map((periodStr: string, idx: number) => (
        <Button
          key={periodStr}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          variant={idx + offset === period ? 'outlined' : 'inherit'}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          color="inherit"
          onClick={() => setPeriod((idx + offset) as any)}
        >
          {periodStr}
        </Button>
      ))}
    </>
  );
};

export default PeriodSelectors;
