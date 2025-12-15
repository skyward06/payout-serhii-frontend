import type { Member } from 'src/sections/Profile/type';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  user: Member | null | undefined;
};

export default function AccountStatus({ user }: Props) {
  const theme = useTheme();

  const isTexitRanger = user?.isTexitRanger ?? false;
  const emailVerified = user?.emailVerified ?? false;
  const activated = user?.activated ?? false;
  const peerAcceptable = user?.peerAcceptable ?? false;

  const statuses = [
    {
      label: 'Email Verified',
      value: emailVerified,
      icon: 'mdi:email-check',
    },
    {
      label: 'Account Activated',
      value: activated,
      icon: 'mdi:account-check',
    },
    {
      label: 'Texit Ranger',
      value: isTexitRanger,
      icon: 'mdi:shield-star',
    },
    {
      label: 'Peer Acceptable',
      value: peerAcceptable,
      icon: 'mdi:handshake',
    },
  ];

  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Stack spacing={3}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              p: 1,
              borderRadius: 1.5,
              background: `linear-gradient(135deg, ${theme.palette.error.main} 0%, ${theme.palette.error.dark} 100%)`,
            }}
          >
            <Iconify icon="mdi:shield-account" width={24} sx={{ color: 'white' }} />
          </Box>
          <Typography variant="h6" fontWeight={600}>
            Account Status
          </Typography>
        </Stack>

        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
          {statuses.map((status) => (
            <Stack
              key={status.label}
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{
                p: 1.5,
                borderRadius: 1.5,
                bgcolor: alpha(
                  status.value ? theme.palette.success.main : theme.palette.grey[500],
                  0.08
                ),
              }}
            >
              <Iconify
                icon={status.icon}
                width={24}
                sx={{
                  color: status.value ? theme.palette.success.main : theme.palette.text.disabled,
                }}
              />
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  {status.label}
                </Typography>
                <Chip
                  size="small"
                  label={status.value ? 'Yes' : 'No'}
                  color={status.value ? 'success' : 'default'}
                  sx={{ height: 20, fontSize: 11, mt: 0.5 }}
                />
              </Box>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Card>
  );
}
