import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type {
  ColDef,
  ISetFilterParams,
  IDateFilterParams,
  ITextFilterParams,
} from '@ag-grid-community/core';

import { useMemo, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { formatDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/formatNumber';
import { parseFilterModel } from 'src/utils/parseFilter';

import { InvoiceStatus } from 'src/__generated__/graphql';

import { AgGrid } from 'src/components/AgGrid';
import { Iconify } from 'src/components/Iconify';
import { IconRenderer, LabelRenderer } from 'src/components/ItemRenderers';

import { parseType } from '../parseType';
import { FileRenderer } from './FileRenderer';
import { useFetchInvoices } from '../useApollo';

import type { Invoice } from './type';

export default function InvoiceListView() {
  const [{ page = '1,50', sort = 'createdAt', filter }] = useQueryString();

  const { loading, invoices, rowCount, fetchInvoices } = useFetchInvoices();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  useEffect(() => {
    fetchInvoices({ variables: { filter: graphQueryFilter, page, sort } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, page, sort]);

  const colDefs = useMemo<ColDef<Invoice>[]>(
    () => [
      {
        field: 'ID',
        headerName: 'Invoice No',
        width: 140,
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<Invoice>) => {
          const invoiceNo = data?.ID.toString().padStart(6, '0');
          return (
            <Chip
              icon={<Iconify icon="solar:bill-list-bold-duotone" width={16} />}
              label={`#${invoiceNo}`}
              size="small"
              color="primary"
              variant="outlined"
            />
          );
        },
      },
      {
        field: 'name',
        headerName: 'Invoice Name',
        flex: 1,
        minWidth: 250,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellClass: 'ag-cell-center',
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 280,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'amountInCents',
        headerName: 'Amount',
        width: 160,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<Invoice>) => (
          <IconRenderer
            icon="material-symbols:paid-outline-rounded"
            value={fCurrency((data?.amountInCents ?? 0) / 100, { minimumFractionDigits: 2 })}
            sx={{ justifyContent: 'space-between' }}
          />
        ),
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 140,
        filter: 'agMultiColumnFilter',
        resizable: true,
        editable: false,
        filterParams: {
          values: Object.values(InvoiceStatus),
          valueFormatter: (params: any) => parseType(params.value),
          defaultToNothingSelected: true,
        } as ISetFilterParams<Invoice>,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<Invoice>) => (
          <Box display="flex">
            <LabelRenderer
              icon={
                data?.status === InvoiceStatus.Paid
                  ? 'game-icons:money-stack'
                  : 'mdi:receipt-text-pending'
              }
              value={data?.status === InvoiceStatus.Paid ? 'Paid' : 'Pending'}
              color={data?.status === InvoiceStatus.Paid ? 'info' : 'warning'}
            />
          </Box>
        ),
      },
      {
        colId: 'attached',
        headerName: 'Attached',
        width: 150,
        filter: false,
        resizable: true,
        editable: false,
        sortable: false,
        cellRenderer: FileRenderer,
      },
      {
        field: 'dueDate',
        headerName: 'Due Date',
        width: 180,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        initialSort: 'desc',
        cellRenderer: ({ data }: CustomCellRendererProps<Invoice>) => (
          <IconRenderer icon="lineicons:calendar-days" value={formatDate(data?.dueDate)} />
        ),
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 180,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        initialSort: 'desc',
        cellRenderer: ({ data }: CustomCellRendererProps<Invoice>) => (
          <IconRenderer icon="lineicons:calendar-days" value={formatDate(data?.createdAt)} />
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
      <AgGrid<Invoice>
        gridKey="miner-invoice-list"
        loading={loading}
        rowData={invoices}
        columnDefs={colDefs}
        totalRowCount={rowCount}
      />
    </Card>
  );
}
