import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/formatNumber';
import { formatDate } from 'src/utils/format-time';

import { Label } from 'src/components/Label';
import { Iconify } from 'src/components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  selected: boolean;
  row: any;
};

export function TableItemRow({ row, selected }: Props) {
  const theme = useTheme();
  const { issuedAt, hashPower, txcShared, percent, sent } = row;

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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Iconify
            icon="solar:calendar-bold"
            sx={{
              color: 'text.secondary',
              width: 16,
              height: 16,
            }}
          />
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight={500}
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
          sx={{
            backgroundColor: alpha(theme.palette.info.main, 0.12),
            color: 'info.dark',
            fontWeight: 600,
            '& .MuiChip-label': {
              px: 1.5,
            },
          }}
        />
      </TableCell>

      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Iconify
            icon="solar:dollar-minimalistic-bold"
            sx={{
              color: 'warning.main',
              width: 16,
              height: 16,
            }}
          />
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight={600}
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
            sx={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {fNumber(percent / 100)}%
          </Typography>
        </Box>
      </TableCell>

      <TableCell>
        <Label
          color={sent ? 'success' : 'error'}
          startIcon={
            <Iconify
              icon={sent ? 'solar:check-circle-bold' : 'solar:close-circle-bold'}
              sx={{ width: 14, height: 14 }}
            />
          }
          sx={{
            '& .MuiChip-label': {
              fontWeight: 600,
            },
          }}
        >
          {sent ? 'Received' : 'Not Received'}
        </Label>
      </TableCell>
    </TableRow>
  );
}
