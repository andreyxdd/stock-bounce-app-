import { useQuery } from 'react-query';
import { IDataProps } from 'types';
import shallow from 'zustand/shallow';
import useStore from './useStore';

const useBounce = () => {
  const [period, selectedDate] = useStore(
    (state) => [state.period, state.selectedDate],
    shallow
  );

  const query = useQuery<Array<IDataProps>>(
    ['bounce', selectedDate, period],
    async () => {
      try {
        if (!selectedDate) throw new Error('No selected date');

        const responseBounceData = await window.electronAPI.getBounceStocks({
          date: selectedDate,
          period,
        });

        return responseBounceData;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
      return [];
    },
    { enabled: !!selectedDate }
  );

  return query;
};

export default useBounce;
