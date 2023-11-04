import { useQuery } from 'react-query';
import { IDataProps } from 'types';
import shallow from 'zustand/shallow';
import useStore from './useStore';

const useBounce = () => {
  const [period, selectedDate, selectedRange] = useStore(
    (state) => [state.period, state.selectedDate, state.selectedRange],
    shallow
  );

  const query = useQuery<Array<IDataProps>>(
    ['bounce', selectedDate, period, selectedRange],
    async () => {
      try {
        if (!selectedDate) throw new Error('No date selected');

        let currPeriod = period;
        switch (selectedRange) {
          case '(48.0 - 99.99)':
            currPeriod = 5;
            break;
          case '(100.0 - 299.99)':
            currPeriod = 6;
            break;
          case '(300.0 - 499.99)':
            currPeriod = 8;
            break;
          case '(500.0 - 1000.0)':
            currPeriod = 9;
            break;
          default:
            currPeriod = period;
        }

        const responseBounceData = await window.electronAPI.getBounceStocks({
          date: selectedDate,
          period: currPeriod,
        });

        return responseBounceData;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
      return [];
    },
    { enabled: !!selectedDate, staleTime: Infinity }
  );

  return query;
};

export default useBounce;
