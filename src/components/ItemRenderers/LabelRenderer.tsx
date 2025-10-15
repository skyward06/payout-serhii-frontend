import { Iconify } from '../Iconify';
import { Label, type LabelColor } from '../Label';

interface Props {
  icon: string;
  value: string;
  color?: LabelColor;
}

export function LabelRenderer({ color = 'default', icon, value }: Props) {
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
