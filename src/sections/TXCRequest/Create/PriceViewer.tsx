import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { fNumber } from 'src/utils/formatNumber';

import { COIN_MARKET_CAP } from 'src/consts';

import { Iconify } from 'src/components/Iconify';

interface Props {
  price: number;
  getPrice: () => Promise<void>;
  loading: UseBooleanReturn;
}

export function PriceViewer({ loading, price, getPrice }: Props) {
  return (
    <Stack
      direction={{ md: 'row', sm: 'column' }}
      spacing={4}
      rowGap={1}
      alignItems="center"
      color="text.secondary"
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="subtitle1">TXC Price</Typography>
        <Iconify icon="lucide:equal-approximately" />
        <Typography variant="body1">
          {fNumber(price * 1.05, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="caption" color="text.secondary">
          {TOOLTIP_TEXT}
        </Typography>
        <Tooltip title="Click here to get the current TXC Price" placement="bottom">
          <Iconify
            icon={loading.value ? 'eos-icons:bubble-loading' : 'ic:baseline-refresh'}
            cursor="pointer"
            onClick={getPrice}
          />
        </Tooltip>
      </Box>
    </Stack>
  );
}

const TOOLTIP_TEXT = (
  <Typography variant="caption">
    This is the price of TXC from{' '}
    <Link component={RouterLink} href={COIN_MARKET_CAP} target="_blank">
      CoinMarketCap
    </Link>
  </Typography>
);
