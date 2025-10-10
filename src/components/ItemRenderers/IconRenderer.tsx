import Stack from '@mui/material/Stack';

import { Iconify } from 'src/components/Iconify';

interface Props {
  icon: string;
  color?: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  value: string;
}

export function IconRenderer({ icon, color = 'primary', value }: Props) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Iconify icon={icon} color={`${color}.main`} />
      {value}
    </Stack>
  );
}
