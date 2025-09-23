import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { formatDate } from 'src/utils/format-time';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchLatestReward } from '../useApollo';

interface RewardItem {
  newBlocks: number;
  totalMembers: number;
  txcShared: string | number;
  issuedAt: string | Date;
}

export default function Latest() {
  const theme = useTheme();
  const { loading, latest } = useFetchLatestReward();

  const renderSkeleton = (
    <Stack spacing={2} sx={{ p: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Stack key={i} direction="row" spacing={2}>
          <Skeleton variant="circular" width={38} height={38} />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="rounded" height={16} sx={{ mb: 1, maxWidth: 240 }} />
            <Skeleton variant="rounded" height={12} sx={{ width: '60%' }} />
          </Box>
          <Skeleton variant="rounded" height={18} width={90} />
        </Stack>
      ))}
    </Stack>
  );

  const renderItem = (item: RewardItem, index: number) => {
    const txc = parseFloat(String(item.txcShared));
    const isLatest = index === 0;

    return (
      <Fade in timeout={320 + index * 40} key={`${item.issuedAt}-${index}`}>
        <Stack direction="row" spacing={2} sx={{ position: 'relative' }}>
          <Box
            sx={{
              width: 14,
              height: 14,
              mt: 0.75,
              flexShrink: 0,
              borderRadius: '50%',
              position: 'relative',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.15)}`,
              '&:after':
                index !== latest.length - 1
                  ? {
                      content: '""',
                      position: 'absolute',
                      top: 14,
                      left: '50%',
                      width: 2,
                      bottom: -12,
                      transform: 'translateX(-50%)',
                      background: `linear-gradient(${alpha(theme.palette.primary.main, 0.4)}, ${alpha(theme.palette.primary.main, 0)})`,
                    }
                  : {},
            }}
          />

          <Paper
            variant="outlined"
            sx={{
              p: 2,
              flex: 1,
              overflow: 'hidden',
              borderColor: alpha(theme.palette.divider, 0.6),
              background: theme.palette.background.paper,
              transition: 'all 0.25s cubic-bezier(.4,0,.2,1)',
              position: 'relative',
            }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
              <Stack spacing={0.5} flex={1} minWidth={200}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1">
                    {formatDate(item.issuedAt, 'MM/DD/YYYY')}
                  </Typography>
                </Stack>
                {isLatest && (
                  <Box>
                    <Chip
                      size="small"
                      label="Latest"
                      color="primary"
                      sx={{ height: 20, fontSize: 11, fontWeight: 600 }}
                    />
                  </Box>
                )}
              </Stack>

              <Divider
                flexItem
                orientation="vertical"
                sx={{ display: { xs: 'none', sm: 'block' }, opacity: 0.15 }}
              />

              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap sx={{ flexGrow: 1 }}>
                <Stack spacing={0.5} minWidth={80}>
                  <Typography variant="overline" color="text.secondary">
                    Blocks
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    letterSpacing={-1}
                    sx={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {item.newBlocks.toLocaleString()}
                  </Typography>
                </Stack>
                <Stack spacing={0.5} minWidth={90}>
                  <Typography variant="overline" color="text.secondary">
                    Miners
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    letterSpacing={-1}
                    sx={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {item.totalMembers.toLocaleString()}
                  </Typography>
                </Stack>
                <Stack spacing={0.5} minWidth={120}>
                  <Typography variant="overline" color="text.secondary">
                    Shared TXC
                  </Typography>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Avatar
                      src={`${CONFIG.SITE_PATH}/assets/icons/brands/txc.png`}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Typography
                      variant="subtitle2"
                      letterSpacing={-1}
                      sx={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {txc.toLocaleString(undefined, { maximumFractionDigits: 6 })}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Fade>
    );
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2.5, pb: 1.5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
          <Stack spacing={0.5}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Iconify icon="marketeq:reward" width={24} sx={{ color: 'primary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Latest Rewards
              </Typography>
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Recent rewards distributed to miners
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Divider sx={{ opacity: 0.2 }} />

      <ScrollBar sx={{ flex: 1, minHeight: 360, maxHeight: 620, px: 2.5, py: 2 }}>
        {loading ? (
          renderSkeleton
        ) : (
          <Stack spacing={1}>{latest.map((r: RewardItem, i: number) => renderItem(r, i))}</Stack>
        )}
      </ScrollBar>
    </Card>
  );
}
