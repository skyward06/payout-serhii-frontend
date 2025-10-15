import type { Theme, SxProps } from '@mui/material/styles';

import Stack from '@mui/material/Stack';

import { Iconify } from 'src/components/Iconify';

interface Props {
  icon: string;
  color?: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  value: string;
  sx?: SxProps<Theme>;
}

export function IconRenderer({ icon, color = 'primary', value, sx }: Props) {
  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={sx}>
      <Iconify icon={icon} color={`${color}.main`} />
      {value}
    </Stack>
  );
}
