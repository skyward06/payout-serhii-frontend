import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/formatNumber';
import { formatDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  selected: boolean;
  row: any;
};

export function TableItemRow({ row, selected }: Props) {
  const theme = useTheme();
  const { issuedAt, hashPower, txcShared, percent } = row;

  return (
    <TableRow
      hover
      selected={selected}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.04),
          '& .MuiTableCell-root': {
            borderBottomColor: alpha(theme.palette.primary.main, 0.12),
          },
        },
        transition: 'all 0.2s ease-in-out',
      }}
    >
      <TableCell>
        <Box display="flex" alignItems="center" gap={1}>
          <Iconify icon="solar:calendar-bold" color="text.secondary" width={16} height={16} />
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight={500}
            letterSpacing={-1}
            sx={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {formatDate(issuedAt)}
          </Typography>
        </Box>
      </TableCell>

      <TableCell>
        <Chip
          label={`${fNumber(hashPower)} M/s`}
          size="small"
          color="info"
          variant="soft"
          sx={{ fontVariantNumeric: 'tabular-nums', letterSpacing: -1 }}
        />
      </TableCell>

      <TableCell>
        <Box display="flex" alignItems="center" gap={1}>
          <Iconify
            icon="solar:dollar-minimalistic-bold"
            color="warning.main"
            width={16}
            height={16}
          />
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight={600}
            letterSpacing={-1}
            sx={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {fNumber(txcShared / 10 ** 8)} TXC
          </Typography>
        </Box>
      </TableCell>

      <TableCell>
        <Box>
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight={600}
            letterSpacing={-1}
            sx={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {fNumber(percent / 100)} %
          </Typography>
        </Box>
      </TableCell>

      {/* <TableCell>
        <LabelRenderer
          color={sent ? 'success' : 'error'}
          value={sent ? 'Received' : 'Not Received'}
          icon={sent ? 'solar:check-circle-bold' : 'solar:close-circle-bold'}
        />
      </TableCell> */}
    </TableRow>
  );
}
