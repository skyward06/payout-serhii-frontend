import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/formatNumber';

import { COIN_MARKET_CAP } from 'src/consts';

import { Iconify } from 'src/components/Iconify';

interface Props {
  price: number;
  getPrice: () => Promise<void>;
  loading: UseBooleanReturn;
}

export function PriceViewer({ loading, price, getPrice }: Props) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="h2" lineHeight={1}>
          {fCurrency(price, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
        </Typography>
        <Stack>
          <Typography lineHeight={1}>*</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body1">/</Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              TXC
            </Typography>
          </Stack>
        </Stack>
        <Tooltip title="Refresh to get current price" arrow placement="bottom">
          <IconButton
            onClick={getPrice}
            disabled={loading.value}
            size="small"
            sx={{
              color: 'inherit',
              bgcolor: 'rgba(255, 255, 255, 0.16)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.24)',
              },
            }}
          >
            <Iconify
              icon={loading.value ? 'eos-icons:bubble-loading' : 'solar:refresh-bold-duotone'}
              width={18}
            />
          </IconButton>
        </Tooltip>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="caption" color="inherit" sx={{ opacity: 0.9 }}>
          Updated from{' '}
          <Link
            component={RouterLink}
            href={COIN_MARKET_CAP}
            target="_blank"
            sx={{
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: 600,
              '&:hover': { opacity: 0.8 },
            }}
          >
            CoinMarketCap
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
