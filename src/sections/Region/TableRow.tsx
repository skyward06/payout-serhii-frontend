import type { EmailRegionWithUnsubscribe } from 'src/__generated__/graphql';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { formatDateTime } from 'src/utils/format-time';

import { ActionRenderer } from './ActionRenderer';

interface Props {
  row: Omit<EmailRegionWithUnsubscribe, 'unsubscribedCount'>;
}

export function EmailRegionTableRow({ row }: Props) {
  return (
    <TableRow hover>
      <TableCell align="left">{row.region}</TableCell>
      <TableCell align="left">{row.description}</TableCell>
      <TableCell align="left">{row.unsubscribed ? 'Unsubscribed' : 'Subscribed'}</TableCell>
      <TableCell align="left">
        {row?.unsubscribedAt ? formatDateTime(row.unsubscribedAt, 'MM/DD/YYYY hh:mm a') : '-'}
      </TableCell>
      <TableCell>
        <ActionRenderer id={row.id} isSubscribed={!row.unsubscribed} />
      </TableCell>
    </TableRow>
  );
}
