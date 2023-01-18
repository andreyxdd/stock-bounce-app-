import Button from '@mui/material/Button';
import useStore from '../hooks/useStore';

type Props = {
  selectors: Array<string>;
  offset: number;
};

const PeriodSelectors = ({ selectors, offset }: Props) => {
  const currentPeriod = useStore((state) => state.period);
  return (
    <>
      {selectors.map((periodStr: string, idx: number) => (
        <Button
          key={periodStr}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          variant={idx + offset === currentPeriod ? 'outlined' : 'inherit'}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          color="inherit"
          onClick={() => useStore.setState({ period: (idx + offset) as any })}
          style={{ fontWeight: 400 }}
        >
          {periodStr}
        </Button>
      ))}
    </>
  );
};

export default PeriodSelectors;
