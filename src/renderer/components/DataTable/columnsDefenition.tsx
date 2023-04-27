import { Typography } from '@mui/material';
import {
  GridColDef,
  GridRenderCellParams,
  GridValueFormatterParams,
} from '@mui/x-data-grid';

const columnsDefinition: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Rank',
    align: 'center',
    headerAlign: 'center',
    description:
      'Ranking by the accumulative differences between close-open prices',
    hideable: false,
    flex: 0.3,
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
    flex: 0.25,
  },
  {
    field: 'open',
    headerName: 'Selected date opening price',
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (params: GridValueFormatterParams) => {
      const valueFormatted = Number(
        (params.value as number).toPrecision(6)
      ).toLocaleString();
      return valueFormatted;
    },
    description: 'Opening prices of the stock on a given trading day',
    disableColumnMenu: true,
    sortable: false,
    flex: 0.8,
  },
  {
    field: 'close',
    headerName: 'Selected date closing price',
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (params: GridValueFormatterParams) => {
      const valueFormatted = Number(
        (params.value as number).toPrecision(6)
      ).toLocaleString();
      return valueFormatted;
    },
    description: 'CLosing prices of the stock on a given trading day',
    disableColumnMenu: true,
    sortable: false,
    flex: 0.8,
  },
  {
    field: 'cp_op_precentage_diff',
    headerName: 'Open-Close Change, %',
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
    flex: 0.5,
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
    flex: 0.4,
  },
  {
    field: 'frequencies',
    headerName: 'Frequencies',
    type: 'string',
    align: 'center',
    headerAlign: 'center',
    description:
      'This column shows other bounce periods when the given stock was in top 20',
    disableColumnMenu: true,
    sortable: false,
    flex: 2,
    renderCell: (params: GridRenderCellParams<string>) => {
      return (
        <Typography fontSize={12} noWrap>
          {params.value}
        </Typography>
      );
    },
  },
];

export default columnsDefinition;
