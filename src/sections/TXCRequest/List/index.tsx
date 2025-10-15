import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type {
  ColDef,
  ISetFilterParams,
  IDateFilterParams,
  ITextFilterParams,
} from '@ag-grid-community/core';

import { useMemo } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { formatID } from 'src/utils/helper';
import { fNumber } from 'src/utils/formatNumber';
import { formatDate, formatTime } from 'src/utils/format-time';

import { TXC_REQUEST_STATUS } from 'src/consts';
import { TxcRequestStatus } from 'src/__generated__/graphql';

import { AgGrid } from 'src/components/AgGrid';
import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { type LabelColor } from 'src/components/Label';
import { IconRenderer, LabelRenderer } from 'src/components/ItemRenderers';

import { parseType } from './parseType';
import { useFetchTXCRequestList } from '../useApollo';

import type { TXCRequest } from './type';

export default function TXCRequestList() {
  const { loading, rowCount, txcRequests } = useFetchTXCRequestList();

  const { copy } = useCopyToClipboard();

  const onCopy = (value: string) => {
    if (value) {
      copy(value);
      toast.success('Copied');
    }
  };

  const colDefs = useMemo<ColDef<TXCRequest>[]>(
    () => [
      {
        field: 'ID',
        headerName: 'ID',
        width: 150,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<TXCRequest>) =>
          formatID(data?.ID ?? '', 'T'),
      },
      {
        field: 'outputAddress',
        headerName: 'Wallet Address',
        flex: 1,
        minWidth: 500,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<TXCRequest>) => (
          <Stack direction="row" spacing={2} alignItems="center" fontFamily="monospace">
            {data?.outputAddress}
            <Iconify
              icon="stash:copy-light"
              sx={{ cursor: 'pointer' }}
              onClick={() => onCopy(data?.outputAddress ?? '')}
            />
          </Stack>
        ),
      },
      {
        field: 'inputBalanceInCent',
        headerName: 'Paid Balance',
        width: 150,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<TXCRequest>) => (
          <IconRenderer
            icon="material-symbols:paid-outline-rounded"
            value={fNumber(Number(data?.inputBalanceInCent) / 100, { minimumFractionDigits: 2 })}
            color="info"
            sx={{ justifyContent: 'space-between' }}
          />
        ),
      },
      {
        field: 'sentBalance',
        headerName: 'Received Balance',
        width: 180,
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<TXCRequest>) =>
          fNumber(Number(data?.sentBalance) / 10 ** 8, { minimumFractionDigits: 2 }),
      },
      {
        field: 'txcPrice',
        headerName: 'TXC Price',
        width: 180,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<TXCRequest>) =>
          fNumber(data?.txcPrice, { minimumFractionDigits: 4, maximumFractionDigits: 4 }),
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 150,
        filter: 'agMultiColumnFilter',
        filterParams: {
          values: Object.values(TxcRequestStatus),
          valueFormatter: (params: any) => parseType(params.value),
          defaultToNothingSelected: true,
        } as ISetFilterParams<TXCRequest>,
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<TXCRequest>) => (
          <LabelRenderer
            value={TXC_REQUEST_STATUS[data?.status!].label}
            color={TXC_REQUEST_STATUS[data?.status!].color as LabelColor}
            icon={TXC_REQUEST_STATUS[data?.status!].icon}
          />
        ),
      },
      {
        field: 'paidAt',
        headerName: 'Paid At',
        width: 160,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<TXCRequest>) => (
          <IconRenderer
            icon="cuida:calendar-outline"
            value={
              <ListItemText
                primary={formatDate(data?.paidAt)}
                secondary={formatTime(data?.paidAt)}
                primaryTypographyProps={{ typography: 'body2' }}
                secondaryTypographyProps={{
                  component: 'span',
                  color: 'text.disabled',
                }}
              />
            }
          />
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Card
      sx={{
        flexGrow: 1,
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <AgGrid<TXCRequest>
        gridKey="miner-txc-request-list"
        loading={loading}
        rowData={txcRequests}
        columnDefs={colDefs}
        totalRowCount={rowCount}
        rowHeight={50}
      />
    </Card>
  );
}
