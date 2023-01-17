import { useQuery } from 'react-query';
import { IDataProps } from 'types';
import useDates from './useDates';

type DatesType = {
  availableDates: Array<string>;
  selectedDate: string;
};

const useBounce = () => {
  const { data: dates } = useDates();
  const selectedDate = dates?.selectedDate;

  const query = useQuery<Array<IDataProps>>(
    ['bounce', selectedDate],
    async () => {
      try {
        if (!selectedDate) throw new Error('No selected date');
        const responseBounceData = await window.electronAPI.getBounceStocks({
          date: selectedDate,
          period: 1,
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
