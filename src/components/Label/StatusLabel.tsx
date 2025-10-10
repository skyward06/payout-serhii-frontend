import { Label } from './label';
import { Iconify } from '../Iconify';

interface Props {
  icon: string;
  value: string;
  color?: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
}

export function StatusLabel({ color = 'default', icon, value }: Props) {
  return (
    <Label
      color={color}
      startIcon={<Iconify icon={icon} width={14} height={14} />}
      sx={{
        '& .MuiChip-label': {
          fontWeight: 600,
        },
      }}
    >
      {value}
    </Label>
  );
}
