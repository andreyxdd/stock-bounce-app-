import Table from './Table';
import useTrack from '../../hooks/useTrack';
import useBounce from '../../hooks/useBounce';
import useStore from '../../hooks/useStore';

function TrackingDataTable() {
  const { data, isFetching, isSuccess, isFetched } = useTrack();
  return (
    <Table
      data={data}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isFetched={isFetched}
    />
  );
}

function CurrentDataTable() {
  const { data, isFetching, isSuccess, isFetched } = useBounce();
  return (
    <Table
      data={data}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isFetched={isFetched}
    />
  );
}

function DataTable() {
  const isTracking = useStore((state) => state.isTracking);
  if (isTracking) return <TrackingDataTable />;
  return <CurrentDataTable />;
}

export default DataTable;
