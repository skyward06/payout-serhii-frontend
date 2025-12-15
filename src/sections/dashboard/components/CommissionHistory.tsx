import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { formatDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/formatNumber';

import { CommissionStatus } from 'src/__generated__/graphql';

import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchUserWeeklyCommissions } from '../useApollo';

// ----------------------------------------------------------------------

type Props = {
  memberId: string | undefined;
};

const getStatusColor = (status: CommissionStatus) => {
  switch (status) {
    case CommissionStatus.Approved:
      return 'success';
    case CommissionStatus.Pending:
      return 'warning';
    case CommissionStatus.Suspended:
      return 'error';
    default:
      return 'default';
  }
};

export default function CommissionHistory({ memberId }: Props) {
  const theme = useTheme();

  const { loading, commissions, fetchUserCommissions } = useFetchUserWeeklyCommissions();

  useEffect(() => {
    if (memberId) {
      fetchUserCommissions({
        variables: {
          page: '1,5',
          filter: { memberId },
          sort: '-weekStartDate',
        },
      });
    }
  }, [memberId, fetchUserCommissions]);

  const renderSkeleton = (
    <Stack spacing={1.5}>
      {Array.from({ length: 4 }).map((_, i) => (
        <Stack
          key={i}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ p: 1.5 }}
        >
          <Box>
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={70} height={14} />
          </Box>
          <Skeleton variant="rounded" width={60} height={24} />
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
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          }}
        >
          <Iconify icon="mdi:cash-multiple" width={24} sx={{ color: 'white' }} />
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Recent Commissions
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Your weekly commission history
          </Typography>
        </Box>
      </Stack>

      <ScrollBar sx={{ flex: 1, px: 2, pb: 2 }}>
        {loading ? (
          renderSkeleton
        ) : commissions.length === 0 ? (
          <Stack alignItems="center" justifyContent="center" sx={{ py: 5 }}>
            <Iconify icon="mdi:cash-off" width={48} sx={{ color: 'text.disabled', mb: 1 }} />
            <Typography variant="body2" color="text.secondary">
              No commissions yet
            </Typography>
          </Stack>
        ) : (
          <Stack spacing={1}>
            {commissions.map((comm: any) => (
              <Stack
                key={comm.id}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  p: 1.5,
                  borderRadius: 1.5,
                  transition: 'all 0.2s ease',
                  bgcolor: alpha(theme.palette.grey[500], 0.04),
                  '&:hover': {
                    bgcolor: alpha(theme.palette.secondary.main, 0.08),
                  },
                }}
              >
                <Box>
                  <Typography variant="body2" fontWeight={600}>
                    Week of {formatDate(comm.weekStartDate, 'MMM DD, YYYY')}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="caption" color="text.secondary">
                      L: {comm.newL} | R: {comm.newR}
                    </Typography>
                    <Chip
                      size="small"
                      label={comm.status}
                      color={getStatusColor(comm.status)}
                      sx={{ height: 18, fontSize: 10 }}
                    />
                  </Stack>
                </Box>
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  sx={{
                    color:
                      comm.commission > 0
                        ? theme.palette.success.main
                        : theme.palette.text.secondary,
                  }}
                >
                  {fCurrency(comm.commission)}
                </Typography>
              </Stack>
            ))}
          </Stack>
        )}
      </ScrollBar>
    </Card>
  );
}
