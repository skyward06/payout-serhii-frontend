import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { formatDate } from 'src/utils/format-time';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchUserStatistics } from '../useApollo';

// ----------------------------------------------------------------------

type Props = {
  memberId: string | undefined;
};

export default function RewardHistory({ memberId }: Props) {
  const theme = useTheme();

  const { loading, statistics, fetchUserStatistics } = useFetchUserStatistics();

  useEffect(() => {
    if (memberId) {
      fetchUserStatistics({
        variables: {
          page: '1,10',
          filter: { memberId },
          sort: '-issuedAt',
        },
      });
    }
  }, [memberId, fetchUserStatistics]);

  const renderSkeleton = (
    <Stack spacing={1.5}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Stack
          key={i}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ p: 1.5 }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Skeleton variant="circular" width={36} height={36} />
            <Box>
              <Skeleton variant="text" width={80} />
              <Skeleton variant="text" width={60} height={14} />
            </Box>
          </Stack>
          <Skeleton variant="text" width={70} />
        </Stack>
      ))}
    </Stack>
  );

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ p: 3, pb: 2 }}>
        <Box
          sx={{
            p: 1,
            borderRadius: 1.5,
            background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)`,
          }}
        >
          <Iconify icon="mdi:history" width={24} sx={{ color: 'white' }} />
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Recent Rewards
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Your latest TXC rewards
          </Typography>
        </Box>
      </Stack>

      <ScrollBar sx={{ flex: 1, px: 2, pb: 2 }}>
        {loading ? (
          renderSkeleton
        ) : statistics.length === 0 ? (
          <Stack alignItems="center" justifyContent="center" sx={{ py: 5 }}>
            <Iconify icon="mdi:inbox-outline" width={48} sx={{ color: 'text.disabled', mb: 1 }} />
            <Typography variant="body2" color="text.secondary">
              No rewards yet
            </Typography>
          </Stack>
        ) : (
          <Stack spacing={1}>
            {statistics.map((stat: any, index: number) => {
              const txcAmount = Number(stat.txcShared) / 10 ** 8;
              return (
                <Stack
                  key={stat.id}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    p: 1.5,
                    borderRadius: 1.5,
                    transition: 'all 0.2s ease',
                    bgcolor: alpha(theme.palette.grey[500], 0.04),
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: alpha(theme.palette.success.main, 0.12),
                      }}
                    >
                      <Iconify
                        icon="mdi:trending-up"
                        width={20}
                        sx={{ color: theme.palette.success.main }}
                      />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {formatDate(stat.issuedAt, 'MMM DD, YYYY')}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Hash Power: {stat.hashPower}
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Avatar
                      src={`${CONFIG.SITE_PATH}/assets/icons/brands/txc.png`}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{ color: theme.palette.success.main }}
                    >
                      +{txcAmount.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                    </Typography>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        )}
      </ScrollBar>
    </Card>
  );
}
