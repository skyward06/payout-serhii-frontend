import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { alpha, useTheme } from '@mui/material/styles';

export function LoadingContent() {
  const theme = useTheme();

  return (
    <Stack spacing={0.7}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Stack
          key={i}
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            position: 'relative',
            p: 2,
            borderRadius: 1,
            border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
            bgcolor: alpha(theme.palette.background.neutral, 0.4),
          }}
        >
          <Skeleton variant="circular" width={48} height={48} sx={{ flexShrink: 0 }} />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Skeleton variant="rounded" height={20} sx={{ maxWidth: 180 }} />
          </Box>
          <Skeleton variant="rounded" width={100} height={24} sx={{ flexShrink: 0 }} />
        </Stack>
      ))}
    </Stack>
  );
}
