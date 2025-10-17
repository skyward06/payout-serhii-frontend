import type { BasicSale } from 'src/sections/Sales/List/type';
import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, IDateFilterParams, ITextFilterParams } from '@ag-grid-community/core';

import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { formatID } from 'src/utils/helper';
import { formatDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/formatNumber';

import { AgGrid } from 'src/components/AgGrid';
import { IconRenderer, LabelRenderer } from 'src/components/ItemRenderers';

import { useFetchSales } from 'src/sections/Sales/useApollo';

export default function SaleListView() {
  const { loading, rowCount, sales } = useFetchSales();

  const colDefs = useMemo<ColDef<BasicSale>[]>(
    () => [
      {
        field: 'ID',
        headerName: 'ID',
        width: 160,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicSale>) => (
          <LabelRenderer
            icon="solar:bill-list-bold"
            value={formatID(data?.ID!, 'S')}
            color="primary"
            variant="outlined"
          />
        ),
      },
      {
        field: 'productName',
        headerName: 'Product Name',
        flex: 1,
        minWidth: 200,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicSale>) => (
          <IconRenderer icon="solar:box-bold-duotone" value={data?.productName} color="info" />
        ),
      },
      {
        field: 'paymentMethod',
        headerName: 'Payment Method',
        width: 250,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicSale>) => (
          <Box display="flex">
            <LabelRenderer icon="solar:card-bold" value={data?.paymentMethod!} color="success" />
          </Box>
        ),
      },
      {
        field: 'amount',
        headerName: 'Amount',
        width: 150,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center ',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicSale>) => (
          <IconRenderer
            icon="material-symbols:paid-outline-rounded"
            value={fCurrency(data?.amount)}
            color="info"
            sx={{ justifyContent: 'space-between' }}
          />
        ),
      },
      {
        field: 'token',
        headerName: 'Hash Power',
        width: 180,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicSale>) => (
          <IconRenderer
            icon="solar:routing-2-bold"
            value={data?.token!}
            sx={{ justifyContent: 'space-between' }}
          />
        ),
      },
      {
        field: 'point',
        headerName: 'Point',
        width: 130,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicSale>) => (
          <Box display="flex" justifyContent="flex-end">
            <LabelRenderer icon="solar:star-bold" value={`${data?.point}`} color="secondary" />
          </Box>
        ),
      },
      {
        field: 'orderedAt',
        headerName: 'Ordered At',
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
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicSale>) => (
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
      <AgGrid<BasicSale>
        gridKey="miner-order-list"
        loading={loading}
        rowData={sales}
        columnDefs={colDefs}
        totalRowCount={rowCount}
      />
    </Card>
  );
}
