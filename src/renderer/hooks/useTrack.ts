import { useQuery } from 'react-query';
import { IDataProps } from 'types';
import shallow from 'zustand/shallow';
import useBounce from './useBounce';
import useStore from './useStore';

const useTrack = () => {
  const { data } = useBounce();
  const [isTracking, selectedTrackingDate] = useStore(
    (state) => [state.isTracking, state.selectedTrackingDate],
    shallow
  );

  const query = useQuery<Array<IDataProps>>(
    [
      'track',
      selectedTrackingDate,
      JSON.stringify(data?.map((stock) => stock.ticker)),
    ],
    async () => {
      try {
        if (!selectedTrackingDate) throw new Error('No tracking date selected');
        if (!data) throw new Error('No data to get tickers');

        const responseBounceData = await window.electronAPI.getTrackedStocks({
          date: selectedTrackingDate,
          tickers: data.map((stock) => stock.ticker),
        });

        return responseBounceData;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
      return [];
    },
    { enabled: isTracking && !!data && !!data?.length }
  );

  return query;
};

export default useTrack;
