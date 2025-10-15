import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/Iconify';

type InfoItemProps = {
  icon: string;
  label: string;
  value: React.ReactNode;
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
};

export function InfoItem({ icon, label, value, color = 'primary' }: InfoItemProps) {
  const theme = useTheme();

  const colorMap = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    error: theme.palette.error.main,
  };

  return (
    <Stack spacing={1.5}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          width={32}
          height={32}
          display="flex"
          borderRadius={1}
          alignItems="center"
          justifyContent="center"
          bgcolor={alpha(colorMap[color], 0.08)}
          flexShrink={0}
        >
          <Iconify icon={icon} width={18} sx={{ color: `${color}.main` }} />
        </Box>
        <Typography variant="caption" color="text.secondary" fontWeight={600} flexShrink={0}>
          {label}
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        sx={{
          pl: 5,
          color: 'text.primary',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
          hyphens: 'auto',
        }}
      >
        {value || '-'}
      </Typography>
    </Stack>
  );
}
