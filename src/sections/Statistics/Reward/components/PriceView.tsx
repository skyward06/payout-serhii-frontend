import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/formatNumber';

import type { MedalConfigType } from './type';

interface Props {
  isTopThree: boolean;
  medalConfig: MedalConfigType;
  price: number;
  description: string;
  isUnit?: boolean;
}

export function PriceView({ isTopThree, medalConfig, price, description, isUnit = false }: Props) {
  const theme = useTheme();

  return (
    <Stack alignItems="flex-end" minWidth={100} flexShrink={0}>
      <Tooltip title={description} arrow placement="left">
        <Typography
          variant="h6"
          fontWeight={700}
          letterSpacing={-1}
          sx={{
            background:
              isTopThree && medalConfig ? medalConfig.iconGradient : theme.palette.text.primary,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: isTopThree ? 'transparent' : 'inherit',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {isUnit ? fCurrency(price) : price}
        </Typography>
      </Tooltip>
      {isUnit && (
        <Typography variant="caption" fontWeight={500} color={theme.palette.text.disabled}>
          USD
        </Typography>
      )}
    </Stack>
  );
}
