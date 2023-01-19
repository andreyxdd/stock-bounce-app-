import Table from './Table';
import useBounce from '../../hooks/useBounce';
import useStore from '../../hooks/useStore';

function TrackingDataTable() {
  const { data, isSuccess, isFetched } = useBounce();
  return (
    <Table data={data} isLoading isSuccess={isSuccess} isFetched={isFetched} />
  );
}

function CurrentDataTable() {
  const { data, isLoading, isSuccess, isFetched } = useBounce();
  return (
    <Table
      data={data}
      isLoading={isLoading}
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
