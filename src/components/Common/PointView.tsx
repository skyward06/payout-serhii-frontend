import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface Props {
  leftValue: number;
  rightValue: number;
}

export function PointView({ leftValue, rightValue }: Props) {
  return (
    <Stack direction="row" spacing={0.75} alignItems="center">
      <Chip
        label={`L ${leftValue}`}
        size="small"
        color="info"
        variant="soft"
        sx={{ minWidth: 55, fontWeight: 500 }}
      />
      <Chip
        label={`R ${rightValue}`}
        size="small"
        color="success"
        variant="soft"
        sx={{ minWidth: 55, fontWeight: 500 }}
      />
    </Stack>
  );
}
