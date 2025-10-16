import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/Iconify';

interface Props {
  title: string;
  subTitle?: string;
}

export function Header({ title, subTitle }: Props) {
  const theme = useTheme();

  return (
    <Box position="relative" zIndex={1} p={2.2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${theme.palette.warning.light} 0%, ${theme.palette.warning.main} 100%)`,
            boxShadow: `0 8px 16px ${alpha(theme.palette.warning.main, 0.24)}`,
          }}
        >
          <Iconify icon="solar:cup-star-bold-duotone" width={28} color="common.white" />
        </Box>
        <Stack>
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {subTitle}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
