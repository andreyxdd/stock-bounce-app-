import { useQuery } from 'react-query';
import { IDateProps } from 'types';

type DatesType = {
  availableDates: Array<string>;
  selectedDate: string;
};

const useDates = () => {
  const query = useQuery<DatesType>('dates', async () => {
    try {
      const responseAvailableDates: Array<IDateProps> =
        await window.electronAPI.getDates();
      const availableDates: Array<string> = responseAvailableDates.map(
        ({ date_string }) => date_string
      );

      const nDates = availableDates.length;
      if (nDates > 0) {
        const selectedDate = availableDates[nDates - 1];

        return { availableDates, selectedDate };
      }
      throw new Error('Array of dates is empty');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
    return { availableDates: [], selectedDate: '' };
  });

  return query;
};

export default useDates;
