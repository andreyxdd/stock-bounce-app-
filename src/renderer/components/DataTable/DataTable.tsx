import { Typography } from '@mui/material';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import SkeletonLoader from 'tiny-skeleton-loader-react';
import React from 'react';
import useBounce from '../../hooks/useBounce';
import columnsDefinition from './columnsDefenition';

const DataTable = () => {
  const [pageSize, setPageSize] = React.useState<number>(10);
  const { data, isLoading, isSuccess, isFetched } = useBounce();

  if (!isLoading && isSuccess && data) {
    return (
      <div
        style={{
          marginTop: '2%',
          marginBottom: '2%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '80%' }}>
          <DataGrid
            rows={data}
            columns={columnsDefinition}
            autoHeight
            showCellRightBorder
            showColumnRightBorder
            disableExtendRowFullWidth
            rowsPerPageOptions={[5, 10, 20]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pageSize={pageSize}
          />
        </div>
      </div>
    );
  }

  if (isFetched && !data) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          style={{
            position: 'absolute',
            textAlign: 'center',
            color: '#696969',
            top: '50%',
          }}
        >
          No data for the given parameters (date and period)
        </Typography>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '80%', minHeight: 630, position: 'relative' }}>
        <SkeletonLoader
          style={{ width: '100%', minHeight: 630, position: 'absolute' }}
        />
        <Typography
          variant="h4"
          style={{
            position: 'absolute',
            top: '40%',
            left: '48%',
            color: '#696969',
          }}
        >
          {`${100}%`}
        </Typography>
      </div>
    </div>
  );
};

export default DataTable;
