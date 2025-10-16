import type { PaletteColorKey } from 'src/types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/Iconify';

interface Props {
  icon: string;
  label: string;
  color?: PaletteColorKey;
}

export function IconItem({ icon, label, color = 'success' }: Props) {
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
      <Box
        sx={{
          width: 32,
          height: 32,
          display: 'flex',
          borderRadius: 1,
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${alpha(theme.palette[color].main, 0.08)} 0%, ${alpha(theme.palette[color].dark, 0.16)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={18} color={`${color}.main`} />
      </Box>
      <Typography variant="subtitle2">{label}</Typography>
    </Stack>
  );
}
