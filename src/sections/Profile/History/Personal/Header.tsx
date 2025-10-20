import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { formatID } from 'src/utils/helper';

import { CustomAvatar } from 'src/components/CustomAvatar';

import { useAuthContext } from 'src/auth/hooks';

import { Setting } from '../Setting';

export function Header() {
  const theme = useTheme();
  const { user } = useAuthContext();

  return (
    <Card>
      <Box
        sx={{
          p: 3,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.primary.dark, 0.08)} 100%)`,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <CustomAvatar>{user?.fullName?.charAt(0) || 'U'}</CustomAvatar>

          <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
            <Typography variant="h5">{user?.fullName}</Typography>
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
              <Chip label={formatID(user?.ID!)} size="small" color="primary" variant="outlined" />
              <Chip label={user?.username} size="small" variant="soft" />
            </Stack>
          </Stack>

          <Setting />
        </Stack>
      </Box>
    </Card>
  );
}
