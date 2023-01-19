import { useQuery } from 'react-query';
import { IDateProps } from 'types';
import useStore from './useStore';

const useDates = () => {
  const query = useQuery<Array<string>>(['dates'], async () => {
    try {
      const responseAvailableDates: Array<IDateProps> =
        await window.electronAPI.getDates();
      const availableDates: Array<string> = responseAvailableDates.map(
        ({ date_string }) => date_string
      );

      const nDates = availableDates.length;
      if (nDates > 0) {
        const date = availableDates[nDates - 1];
        useStore.setState({ selectedDate: date, selectedTrackingDate: date });
        return availableDates;
      }
      throw new Error('Array of dates is empty');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
    return []; // no available dates
  });

  return query;
};

export default useDates;
