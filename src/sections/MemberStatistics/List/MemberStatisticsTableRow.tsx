import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { formatDate } from 'src/utils/format-time';

import { Label } from 'src/components/Label';

// ----------------------------------------------------------------------

type Props = {
  selected: boolean;
  row: any;
};

export default function MemberStatisticsTableRow({ row, selected }: Props) {
  const { issuedAt, hashPower, txcShared, percent, sent } = row;
  return (
    <TableRow hover selected={selected}>
      <TableCell>{formatDate(issuedAt)}</TableCell>
      <TableCell>{hashPower}</TableCell>
      <TableCell>{txcShared / 10 ** 8}</TableCell>
      <TableCell>{percent / 100} %</TableCell>
      <TableCell>
        <Label color={sent ? 'success' : 'error'}>{sent ? 'Received' : 'Not Received'}</Label>
      </TableCell>
    </TableRow>
  );
}
