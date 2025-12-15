import type { Member } from 'src/sections/Profile/type';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/formatNumber';

import { Iconify } from 'src/components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  user: Member | null | undefined;
  loading?: boolean;
};

export default function PointsBalance({ user, loading }: Props) {
  const theme = useTheme();

  const points = user?.point ?? 0;
  const orderedAvailablePoint = user?.orderedAvailablePoint ?? 0;
  const potential = user?.potential ?? 0;

  const stats = [
    {
      label: 'Available Points',
      value: points,
      icon: 'mdi:star-circle',
      color: theme.palette.warning.main,
      bgColor: alpha(theme.palette.warning.main, 0.12),
    },
    {
      label: 'Ordered Points',
      value: orderedAvailablePoint,
      icon: 'mdi:cart-check',
      color: theme.palette.info.main,
      bgColor: alpha(theme.palette.info.main, 0.12),
    },
    {
      label: 'Potential',
      value: potential,
      icon: 'mdi:trending-up',
      color: theme.palette.success.main,
      bgColor: alpha(theme.palette.success.main, 0.12),
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
              background: `linear-gradient(135deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning.dark} 100%)`,
            }}
          >
            <Iconify icon="mdi:wallet" width={24} sx={{ color: 'white' }} />
          </Box>
          <Typography variant="h6" fontWeight={600}>
            My Balance
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {stats.map((stat) => (
            <Stack
              key={stat.label}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: stat.bgColor,
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateX(4px)',
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Iconify icon={stat.icon} width={24} sx={{ color: stat.color }} />
                <Typography variant="body2" fontWeight={500}>
                  {stat.label}
                </Typography>
              </Stack>
              {loading ? (
                <Skeleton variant="text" width={60} />
              ) : (
                <Typography variant="h6" fontWeight={700} sx={{ color: stat.color }}>
                  {fNumber(stat.value)}
                </Typography>
              )}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
