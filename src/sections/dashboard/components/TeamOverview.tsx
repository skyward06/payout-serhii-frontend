import type { Member } from 'src/sections/Profile/type';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
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

export default function TeamOverview({ user, loading }: Props) {
  const theme = useTheme();

  const totalIntroducers = user?.totalIntroducers ?? 0;
  const commission = user?.commission;

  const begL = commission?.begL ?? 0;
  const begR = commission?.begR ?? 0;
  const newL = commission?.newL ?? 0;
  const newR = commission?.newR ?? 0;

  const totalLeft = begL + newL;
  const totalRight = begR + newR;
  const totalVolume = totalLeft + totalRight;
  const leftPercent = totalVolume > 0 ? (totalLeft / totalVolume) * 100 : 50;
  const rightPercent = totalVolume > 0 ? (totalRight / totalVolume) * 100 : 50;

  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Stack spacing={3}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              p: 1,
              borderRadius: 1.5,
              background: `linear-gradient(135deg, ${theme.palette.info.main} 0%, ${theme.palette.info.dark} 100%)`,
            }}
          >
            <Iconify icon="mdi:account-group" width={24} sx={{ color: 'white' }} />
          </Box>
          <Typography variant="h6" fontWeight={600}>
            My Team Overview
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            py: 2,
            px: 3,
            borderRadius: 2,
            bgcolor: alpha(theme.palette.primary.main, 0.08),
          }}
        >
          <Iconify icon="mdi:account-multiple-plus" width={32} color="primary.main" />
          <Box textAlign="center">
            {loading ? (
              <Skeleton variant="text" width={60} height={48} />
            ) : (
              <Typography variant="h3" color="primary.main" fontWeight={700}>
                {fNumber(totalIntroducers)}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              Total Referrals
            </Typography>
          </Box>
        </Stack>

        <Divider />

        <Box>
          <Typography variant="subtitle2" color="text.secondary" mb={2}>
            Binary Team Balance
          </Typography>

          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: theme.palette.info.main,
                  }}
                />
                <Typography variant="body2">Left Leg</Typography>
              </Stack>
              {loading ? (
                <Skeleton variant="text" width={80} />
              ) : (
                <Typography variant="subtitle2" fontWeight={600}>
                  {fNumber(totalLeft)} ({leftPercent.toFixed(1)}%)
                </Typography>
              )}
            </Stack>

            {loading ? (
              <Skeleton variant="rectangular" height={8} sx={{ borderRadius: 1 }} />
            ) : (
              <Box sx={{ display: 'flex', height: 8, borderRadius: 1, overflow: 'hidden' }}>
                <Box
                  sx={{
                    width: `${leftPercent}%`,
                    bgcolor: theme.palette.info.main,
                    transition: 'width 0.3s ease',
                  }}
                />
                <Box
                  sx={{
                    width: `${rightPercent}%`,
                    bgcolor: theme.palette.success.main,
                    transition: 'width 0.3s ease',
                  }}
                />
              </Box>
            )}

            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: theme.palette.success.main,
                  }}
                />
                <Typography variant="body2">Right Leg</Typography>
              </Stack>
              {loading ? (
                <Skeleton variant="text" width={80} />
              ) : (
                <Typography variant="subtitle2" fontWeight={600}>
                  {fNumber(totalRight)} ({rightPercent.toFixed(1)}%)
                </Typography>
              )}
            </Stack>
          </Stack>
        </Box>

        <Divider />

        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap={2}
          sx={{
            '& > div': {
              p: 1.5,
              borderRadius: 1.5,
              bgcolor: alpha(theme.palette.grey[500], 0.08),
            },
          }}
        >
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">
              New Left
            </Typography>
            {loading ? (
              <Skeleton variant="text" width={40} />
            ) : (
              <Typography variant="subtitle1" fontWeight={600}>
                {fNumber(newL)}
              </Typography>
            )}
          </Stack>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">
              New Right
            </Typography>
            {loading ? (
              <Skeleton variant="text" width={40} />
            ) : (
              <Typography variant="subtitle1" fontWeight={600}>
                {fNumber(newR)}
              </Typography>
            )}
          </Stack>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">
              Beginning Left
            </Typography>
            {loading ? (
              <Skeleton variant="text" width={40} />
            ) : (
              <Typography variant="subtitle1" fontWeight={600}>
                {fNumber(begL)}
              </Typography>
            )}
          </Stack>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">
              Beginning Right
            </Typography>
            {loading ? (
              <Skeleton variant="text" width={40} />
            ) : (
              <Typography variant="subtitle1" fontWeight={600}>
                {fNumber(begR)}
              </Typography>
            )}
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
}
