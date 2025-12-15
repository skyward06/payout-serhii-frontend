import type { Member } from 'src/sections/Profile/type';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/formatNumber';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  user: Member | null | undefined;
  loading?: boolean;
};

export default function MiningSummary({ user, loading }: Props) {
  const theme = useTheme();

  const currentHashPower = user?.currentHashPower ?? 0;
  const totalTXCShared = Number(user?.totalTXCShared ?? 0) / 10 ** 8;
  const totalTXCNotReceived = Number(user?.totalTXCNotReceived ?? 0) / 10 ** 8;
  const activated = user?.activated ?? false;

  const stats = [
    {
      label: 'Current Hash Power',
      value: currentHashPower,
      icon: 'mdi:lightning-bolt',
      color: theme.palette.primary.main,
      format: (v: number) => fNumber(v),
    },
    {
      label: 'Total TXC Earned',
      value: totalTXCShared,
      icon: 'ri:coin-fill',
      color: theme.palette.success.main,
      format: (v: number) => v.toLocaleString(undefined, { maximumFractionDigits: 4 }),
      showTxcIcon: true,
    },
    {
      label: 'TXC Pending',
      value: totalTXCNotReceived,
      icon: 'mdi:clock-outline',
      color: totalTXCNotReceived > 0 ? theme.palette.warning.main : theme.palette.success.main,
      format: (v: number) => v.toLocaleString(undefined, { maximumFractionDigits: 4 }),
      showTxcIcon: true,
    },
    {
      label: 'Activation Status',
      value: activated ? 'Active' : 'Inactive',
      icon: activated ? 'mdi:check-circle' : 'mdi:alert-circle',
      color: activated ? theme.palette.success.main : theme.palette.error.main,
      isStatus: true,
    },
  ];

  return (
    <Card
      sx={{
        p: 3,
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.9)} 0%, ${alpha(theme.palette.primary.main, 0.85)} 100%)`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: alpha('#fff', 0.1),
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: alpha('#fff', 0.05),
        }}
      />

      <Stack spacing={3} position="relative">
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Iconify icon="mdi:pickaxe" width={28} />
          <Typography variant="h5" fontWeight={700}>
            My Mining Summary
          </Typography>
        </Stack>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
          gap={3}
        >
          {stats.map((stat) => (
            <Stack key={stat.label} spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Iconify icon={stat.icon} width={20} sx={{ color: alpha('#fff', 0.7) }} />
                <Typography variant="caption" sx={{ color: alpha('#fff', 0.7) }}>
                  {stat.label}
                </Typography>
              </Stack>
              {loading ? (
                <Skeleton variant="text" sx={{ bgcolor: alpha('#fff', 0.2), width: 80 }} />
              ) : (
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  {stat.showTxcIcon && (
                    <Avatar
                      src={`${CONFIG.SITE_PATH}/assets/icons/brands/txc.png`}
                      sx={{ width: 20, height: 20 }}
                    />
                  )}
                  <Typography variant="h4" fontWeight={700}>
                    {stat.isStatus ? stat.value : stat.format?.(stat.value as number)}
                  </Typography>
                </Stack>
              )}
            </Stack>
          ))}
        </Box>
      </Stack>
    </Card>
  );
}
