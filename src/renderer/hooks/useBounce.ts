import { useQuery } from 'react-query';
import { IDataProps } from 'types';
import useDates from './useDates';
import useStore from './useStore';

const useBounce = () => {
  const period = useStore((state) => state.period);
  const { data: dates } = useDates();
  const selectedDate = dates?.selectedDate;

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
