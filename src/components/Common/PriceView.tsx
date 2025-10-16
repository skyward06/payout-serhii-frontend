import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { fCurrency } from 'src/utils/formatNumber';

interface Props {
  price: number;
}

export function PriceView({ price }: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Chip
        label={fCurrency(price)}
        size="small"
        color="primary"
        sx={{
          fontWeight: 600,
          minWidth: 90,
        }}
      />
    </Box>
  );
}
