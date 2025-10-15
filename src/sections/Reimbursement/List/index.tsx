import type { LabelColor } from 'src/components/Label';
import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type {
  ColDef,
  ISetFilterParams,
  IDateFilterParams,
  ITextFilterParams,
} from '@ag-grid-community/core';

import { useMemo } from 'react';

import Card from '@mui/material/Card';

import { formatID } from 'src/utils/helper';
import { formatDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/formatNumber';

import { REIMBURSEMENT_STATUS } from 'src/consts';
import { ReimbursementStatus } from 'src/__generated__/graphql';

import { AgGrid } from 'src/components/AgGrid';
import { IconRenderer, LabelRenderer } from 'src/components/ItemRenderers';

import { parseType } from './parseType';
import { FileRenderer } from './FileRender';
import { ActionRender } from '../ActionRender';
import { useFetchReimbursement } from '../useApollo';

import type { BasicReimbursement } from './type';

export function ReimbursementList() {
  const { loading, rowCount, reimbursements } = useFetchReimbursement();

  const colDefs = useMemo<ColDef<BasicReimbursement>[]>(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        width: 150,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicReimbursement>) =>
          formatID(data?.id ?? '', 'R'),
      },
      {
        field: 'requestedAmountInCent',
        headerName: 'Amount',
        width: 150,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicReimbursement>) => (
          <IconRenderer
            icon="material-symbols:paid-outline-rounded"
            color="info"
            value={fCurrency((data?.requestedAmountInCent ?? 0) / 100, {
              minimumFractionDigits: 2,
            })}
            sx={{ justifyContent: 'space-between' }}
          />
        ),
      },
      {
        field: 'description',
        headerName: 'Description',
        flex: 1,
        width: 100,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        colId: 'attached',
        headerName: 'Attachment',
        width: 200,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: FileRenderer,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 150,
        filter: 'agMultiColumnFilter',
        filterParams: {
          values: Object.values(ReimbursementStatus),
          valueFormatter: (params: any) => parseType(params.value),
          defaultToNothingSelected: true,
        } as ISetFilterParams<BasicReimbursement>,
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicReimbursement>) => (
          <LabelRenderer
            icon={REIMBURSEMENT_STATUS[data?.status!].icon}
            value={REIMBURSEMENT_STATUS[data?.status!].label}
            color={REIMBURSEMENT_STATUS[data?.status!].color as LabelColor}
          />
        ),
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 200,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicReimbursement>) => (
          <IconRenderer icon="cuida:calendar-outline" value={formatDate(data?.createdAt)} />
        ),
      },
      {
        colId: 'action',
        width: 50,
        pinned: 'right',
        resizable: false,
        editable: false,
        sortable: false,
        cellRenderer: ActionRender,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Card sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
      <AgGrid<BasicReimbursement>
        gridKey="miner-reimbursement-list"
        loading={loading}
        rowData={reimbursements}
        columnDefs={colDefs}
        totalRowCount={rowCount}
      />
    </Card>
  );
}
