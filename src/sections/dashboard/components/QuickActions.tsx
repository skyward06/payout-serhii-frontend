import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/Iconify';

// ----------------------------------------------------------------------

export default function QuickActions() {
  const theme = useTheme();
  const router = useRouter();

  const actions = [
    {
      label: 'View Profile',
      icon: 'mdi:account-edit',
      path: paths.dashboard.profile.root,
      color: theme.palette.primary.main,
    },
    {
      label: 'My Team',
      icon: 'mdi:account-group',
      path: paths.dashboard.team.root,
      color: theme.palette.info.main,
    },
    {
      label: 'Rewards',
      icon: 'mdi:gift',
      path: paths.dashboard.reward.root,
      color: theme.palette.success.main,
    },
    {
      label: 'Commission',
      icon: 'mdi:cash',
      path: paths.dashboard.commission.root,
      color: theme.palette.warning.main,
    },
  ];

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h6" fontWeight={600}>
          Quick Actions
        </Typography>

        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="outlined"
              onClick={() => router.push(action.path)}
              sx={{
                py: 2,
                flexDirection: 'column',
                borderColor: alpha(action.color, 0.3),
                '&:hover': {
                  borderColor: action.color,
                  bgcolor: alpha(action.color, 0.08),
                },
              }}
            >
              <Iconify icon={action.icon} width={28} sx={{ color: action.color, mb: 1 }} />
              <Typography variant="caption" fontWeight={500}>
                {action.label}
              </Typography>
            </Button>
          ))}
        </Box>
      </Stack>
    </Card>
  );
}
