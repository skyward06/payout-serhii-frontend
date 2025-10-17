import { Iconify } from '../Iconify';
import { Label, type LabelProps } from '../Label';

interface Props extends LabelProps {
  icon?: string | null;
  value: string;
}

export function LabelRenderer({ icon, value, ref, ...other }: Props) {
  return (
    <Label
      {...(icon && {
        startIcon: <Iconify icon={icon} width={14} height={14} />,
      })}
      sx={{
        px: 1,
        '& .MuiChip-label': {
          fontWeight: 600,
        },
      }}
      {...other}
    >
      {value}
    </Label>
  );
}
