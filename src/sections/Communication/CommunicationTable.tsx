import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, IDateFilterParams, ITextFilterParams } from '@ag-grid-community/core';

import { useMemo } from 'react';

import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';

import { formatDate } from 'src/utils/format-time';

import { AgGrid } from 'src/components/AgGrid';
import { Iconify } from 'src/components/Iconify';
import { IconRenderer } from 'src/components/ItemRenderers';

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
        width: 300,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<EmailRecipient>) => (
          <IconRenderer icon="ic:round-email" value={data?.email!} />
        ),
      },
      {
        field: 'sender',
        headerName: 'Sender',
        width: 200,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<EmailRecipient>) => (
          <IconRenderer icon="lets-icons:user-fill" value={data?.sender!} />
        ),
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
        cellRenderer: ({ data }: CustomCellRendererProps<EmailRecipient>) => (
          <IconRenderer icon="cuida:calendar-outline" value={formatDate(data?.sentAt)} />
        ),
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
        width: 50,
        filter: false,
        sortable: false,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<EmailRecipient>) => (
          <Tooltip title={data?.openedAt ? 'Opened' : data?.sentAt ? 'Sent' : 'Not sent yet'} arrow>
            <Iconify
              icon={data?.openedAt ? 'akar-icons:double-check' : 'lucide:check'}
              color={data?.sentAt ? 'green' : '#999999'}
              mt={0.8}
            />
          </Tooltip>
        ),
      },
      {
        colId: 'action',
        width: 50,
        resizable: false,
        editable: false,
        sortable: false,
        pinned: 'right',
        cellClass: 'ag-cell-center',
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
        gridKey="miner-communication-list"
        rowData={emailRecipients}
        columnDefs={colDefs}
        totalRowCount={rowCount}
      />
    </Card>
  );
}
