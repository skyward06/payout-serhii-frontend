import type { Theme, SxProps } from '@mui/material';

import { Iconify } from '../Iconify';
import { Label, type LabelColor } from '../Label';

interface Props {
  icon?: string | null;
  value: string;
  color?: LabelColor;
  sx?: SxProps<Theme>;
}

export function LabelRenderer({ color = 'default', icon, value, sx }: Props) {
  return (
    <Label
      color={color}
      {...(icon && {
        startIcon: <Iconify icon={icon} width={14} height={14} />,
      })}
      sx={{
        px: 1,
        '& .MuiChip-label': {
          fontWeight: 600,
        },
        ...sx,
      }}
    >
      {value}
    </Label>
  );
}
