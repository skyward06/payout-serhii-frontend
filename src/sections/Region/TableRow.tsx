import type { EmailRegionWithUnsubscribe } from 'src/__generated__/graphql';

import { ListItemText } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { formatDate, formatTime } from 'src/utils/format-time';

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
        <ListItemText
          primary={row?.unsubscribedAt ? formatDate(row.unsubscribedAt) : '—'}
          secondary={row?.unsubscribedAt ? formatTime(row.unsubscribedAt) : ''}
          primaryTypographyProps={{ typography: 'subtitle1' }}
          secondaryTypographyProps={{
            component: 'span',
            color: 'text.disabled',
          }}
        />
      </TableCell>
      <TableCell>
        <ActionRenderer id={row.id} isSubscribed={!row.unsubscribed} />
      </TableCell>
    </TableRow>
  );
}
