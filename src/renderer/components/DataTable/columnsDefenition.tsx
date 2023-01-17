import { GridColDef, GridValueFormatterParams } from '@mui/x-data-grid';

const columnsDefinition: GridColDef[] = [
  {
    field: 'id',
    headerName: '#',
    align: 'center',
    headerAlign: 'center',
    description:
      'Ranking by the accumulative differences between close-open prices',
    hideable: false,
    flex: 0.2,
  },
  {
    field: 'ticker',
    headerName: 'Ticker',
    renderCell: (params) => (
      <a
        href={`https://finance.yahoo.com/quote/${params.value}`}
        target="_blank"
        rel="noreferrer"
      >
        {params.value}
      </a>
    ),
    align: 'center',
    headerAlign: 'center',
    description: 'Stock symbol',
    disableColumnMenu: true,
    sortable: false,
    hideable: false,
    flex: 1,
  },
  {
    field: 'open',
    headerName: 'Opening price',
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (params: GridValueFormatterParams) => {
      const valueFormatted = Number(
        (params.value as number).toFixed(2)
      ).toLocaleString();
      return valueFormatted;
    },
    description: 'Opening prices of the stock on a given trading day',
    disableColumnMenu: true,
    sortable: false,
    flex: 1,
  },
  {
    field: 'close',
    headerName: 'Closing price',
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (params: GridValueFormatterParams) => {
      const valueFormatted = Number(
        (params.value as number).toFixed(2)
      ).toLocaleString();
      return valueFormatted;
    },
    description: 'CLosing prices of the stock on a given trading day',
    disableColumnMenu: true,
    sortable: false,
    flex: 1,
  },
  {
    field: 'cp_op_precentage_diff',
    headerName: '1-day Open-Close Change, %',
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (params: GridValueFormatterParams) => {
      const valueFormatted = Number(
        (params.value as number).toFixed(2)
      ).toLocaleString();
      return valueFormatted;
    },
    description:
      'Precentage change between close and open prices for the given trading day',
    disableColumnMenu: true,
    sortable: false,
    flex: 1,
  },
  {
    field: 'volume',
    headerName: 'Volume',
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (params: GridValueFormatterParams) => {
      const valueFormatted = Number(
        (params.value as number).toFixed(2)
      ).toLocaleString();
      return valueFormatted;
    },
    description: 'Stock volume',
    disableColumnMenu: true,
    sortable: false,
    flex: 1,
  },
];

export default columnsDefinition;
