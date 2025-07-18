import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, IDateFilterParams, ITextFilterParams } from '@ag-grid-community/core';

import { useMemo } from 'react';

import Card from '@mui/material/Card';

import { formatDate } from 'src/utils/format-time';

import { AgGrid } from 'src/components/AgGrid';
import { Iconify } from 'src/components/Iconify';

import { useAuthContext } from 'src/auth/hooks';

import { ActionRender } from './ActionRenderer';
import { useFetchEmailRecipients } from './useApollo';

import type { EmailRecipient } from './type';

export default function CommunicationTable() {
  const { user } = useAuthContext();

  const { loading, rowCount, emailRecipients } = useFetchEmailRecipients();

  const colDefs = useMemo<ColDef<EmailRecipient>[]>(
    () => [
      {
        field: 'subject',
        headerName: 'Subject',
        flex: 1,
        minWidth: 200,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 200,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'sender',
        headerName: 'Sender',
        width: 200,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'senderName',
        headerName: 'Sender Name',
        width: 250,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'sentAt',
        headerName: 'Sent At',
        width: 150,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<EmailRecipient>) =>
          formatDate(data?.sentAt),
      },
      {
        field: 'openedAt',
        headerName: 'Opened At',
        width: 150,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<EmailRecipient>) =>
          data?.openedAt ? formatDate(data?.openedAt) : 'Not opened yet',
      },
      {
        headerName: 'Status',
        width: 100,
        filter: false,
        sortable: false,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<EmailRecipient>) => (
          <Iconify
            icon={data?.openedAt ? 'akar-icons:double-check' : 'lucide:check'}
            color={data?.sentAt ? 'green' : '#999999'}
            mt={0.8}
          />
        ),
      },
      {
        colId: 'action',
        width: 50,
        resizable: false,
        editable: false,
        sortable: false,
        pinned: 'right',
        cellClass: 'ag-action-cell',
        cellRenderer: ActionRender,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return (
    <Card
      sx={{
        flexGrow: 1,
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <AgGrid<EmailRecipient>
        loading={loading}
        gridKey="member-communication-list"
        rowData={emailRecipients}
        columnDefs={colDefs}
        totalRowCount={rowCount}
      />
    </Card>
  );
}
