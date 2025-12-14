import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { fDate } from 'src/utils/format-time';
import { fNumber } from 'src/utils/formatNumber';

import { Label } from 'src/components/Label';

// ----------------------------------------------------------------------

type Props = {
  row: any;
};

export default function MemberStatisticsTableRow({ row }: Props) {
  const { issuedAt, hashPower, txcShared, sent, statistic } = row;
  return (
    <TableRow hover>
      <TableCell>{fDate(issuedAt)}</TableCell>
      <TableCell>{hashPower}</TableCell>
      <TableCell>{txcShared / 10 ** 8}</TableCell>
      <TableCell>{fNumber(txcShared / (statistic?.txcShared ?? 0) / 100)} %</TableCell>
      <TableCell>
        <Label color={sent ? 'success' : 'error'}>{sent ? 'Received' : 'Not Received'}</Label>
      </TableCell>
    </TableRow>
  );
}
