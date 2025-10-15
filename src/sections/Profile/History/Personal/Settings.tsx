import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/Iconify';

import { useAuthContext } from 'src/auth/hooks';

export function SettingsInfo() {
  const theme = useTheme();
  const { user } = useAuthContext();

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" mb={3}>
        Settings
      </Typography>

      <Box
        p={2}
        borderRadius={1.5}
        border={`1px solid ${alpha(theme.palette.grey[500], 0.12)}`}
        bgcolor={alpha(theme.palette.grey[500], 0.04)}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              width={40}
              height={40}
              display="flex"
              borderRadius={1}
              alignItems="center"
              justifyContent="center"
              bgcolor={alpha(
                user?.setting?.communication
                  ? theme.palette.success.main
                  : theme.palette.error.main,
                0.08
              )}
            >
              <Iconify
                icon="solar:chat-round-dots-bold-duotone"
                width={22}
                sx={{
                  color: user?.setting?.communication ? 'success.main' : 'error.main',
                }}
              />
            </Box>
            <Typography variant="subtitle2">Communication</Typography>
          </Stack>
          <Chip
            icon={
              <Iconify
                icon={
                  user?.setting?.communication
                    ? 'solar:check-circle-bold'
                    : 'solar:close-circle-bold'
                }
              />
            }
            label={user?.setting?.communication ? 'Enabled' : 'Disabled'}
            color={user?.setting?.communication ? 'success' : 'error'}
            size="small"
            variant="soft"
          />
        </Stack>
      </Box>
    </Card>
  );
}
