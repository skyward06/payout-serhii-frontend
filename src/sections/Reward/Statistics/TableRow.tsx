import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { fDate } from 'src/utils/format-time';

import { Label } from 'src/components/Label';

// ----------------------------------------------------------------------

type Props = {
  row: any;
};

export default function MemberStatisticsTableRow({ row }: Props) {
  const { issuedAt, member, hashPower, txcShared, percent, sent } = row;
  return (
    <TableRow hover>
      <TableCell>{fDate(issuedAt)}</TableCell>
      <TableCell>{member?.username}</TableCell>
      <TableCell>{hashPower}</TableCell>
      <TableCell>{txcShared / 10 ** 8}</TableCell>
      <TableCell>{percent / 100} %</TableCell>
      <TableCell>
        <Label color={sent ? 'success' : 'error'}>{sent ? 'Received' : 'Not Received'}</Label>
      </TableCell>
    </TableRow>
  );
}
