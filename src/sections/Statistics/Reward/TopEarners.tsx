import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fCurrency } from 'src/utils/formatNumber';
import { customizeFullName } from 'src/utils/helper';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchTopEarners } from '../useApollo';

interface TopEarnerItem {
  avatar?: string | null;
  fullName: string;
  earned: number | string;
}

export function TopEarners() {
  const theme = useTheme();
  const { loading, topEarners } = useFetchTopEarners();

  const parsed = (topEarners || []) as TopEarnerItem[];

  const medalColors = [
    {
      border: '#f6c76d',
      glow: 'rgba(246,199,109,0.4)',
      gradient: 'linear-gradient(135deg,#f7d58a,#e8b247)',
    },
    {
      border: '#c9ced8',
      glow: 'rgba(201,206,216,0.35)',
      gradient: 'linear-gradient(135deg,#d8dde5,#b4bcc8)',
    },
    {
      border: '#d5ae89',
      glow: 'rgba(213,174,137,0.35)',
      gradient: 'linear-gradient(135deg,#e5c5a8,#c89664)',
    },
  ];

  const rankLabel = (index: number) =>
    index === 0 ? '1ST' : index === 1 ? '2ND' : index === 2 ? '3RD' : `${index + 1}`;

  const renderSkeleton = (
    <Stack spacing={1.75} sx={{ p: 2.5 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <Stack key={i} direction="row" spacing={2} alignItems="center">
          <Skeleton variant="circular" width={48} height={48} />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="rounded" height={16} sx={{ mb: 1, maxWidth: 220 }} />
            <Skeleton variant="rounded" height={12} sx={{ width: '50%' }} />
          </Box>
          <Skeleton variant="rounded" width={80} height={20} />
        </Stack>
      ))}
    </Stack>
  );

  const renderRow = (item: TopEarnerItem, index: number) => {
    const medal = medalColors[index] || null;
    const earnedValue = parseFloat(String(item.earned || 0));
    return (
      <Fade in timeout={280 + index * 40} key={`${item.fullName}-${index}`}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            position: 'relative',
            p: 2,
            borderRadius: 1,
            background:
              index < 3
                ? `linear-gradient(145deg, ${alpha(theme.palette.primary.main, 0.12)}, ${alpha(theme.palette.primary.dark, 0.1)})`
                : alpha(theme.palette.background.paper, 0.5),
            border: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
          }}
        >
          <Box
            sx={{ position: 'relative' }}
            aria-label={index < 3 ? `Rank ${index + 1} medal` : undefined}
          >
            <Avatar
              src={item.avatar ?? `${CONFIG.SITE_PATH}/assets/avatar.jpg`}
              alt={item.fullName}
              sx={{
                width: 48,
                height: 48,
                fontSize: 18,
                fontWeight: 600,
                bgcolor: alpha(theme.palette.primary.main, 0.12),
                border: medal
                  ? `2px solid ${medal.border}`
                  : `1px solid ${alpha(theme.palette.divider, 0.6)}`,
                boxShadow: medal ? `0 0 0 3px ${medal.glow}` : undefined,
                backgroundImage: medal ? medal.gradient : undefined,
                color: medal ? theme.palette.grey[900] : theme.palette.text.primary,
                position: 'relative',
                '&:after': medal
                  ? {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 'inherit',
                      padding: '2px',
                      background: `conic-gradient(from 0deg, ${medal.border}, transparent 70%)`,
                      WebkitMask:
                        'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      animation: 'spinMedal 6s linear infinite',
                      opacity: 0.6,
                    }
                  : undefined,
              }}
            >
              {item.fullName?.charAt(0).toUpperCase()}
            </Avatar>
            {index < 3 && (
              <Chip
                size="small"
                label={rankLabel(index)}
                sx={{
                  position: 'absolute',
                  bottom: -6,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: 18,
                  fontSize: 10,
                  fontWeight: 700,
                  borderRadius: 1,
                  background: medal?.gradient,
                  color: '#222',
                  boxShadow: `0 2px 4px ${alpha('#000', 0.25)}`,
                  '& .MuiChip-label': { px: 0.75, pt: 0.25 },
                }}
              />
            )}
          </Box>

          <Stack spacing={0.25} flex={1} minWidth={80}>
            <Typography variant="subtitle1" noWrap>
              {customizeFullName(item.fullName)}
            </Typography>
          </Stack>

          <Divider
            flexItem
            orientation="vertical"
            sx={{ height: 34, opacity: 0.16, display: { xs: 'none', sm: 'block' } }}
          />

          <Stack spacing={0.5} alignItems="flex-end" minWidth={80}>
            <Tooltip title="Total earned reward" arrow>
              <Typography
                variant="subtitle2"
                letterSpacing={-1}
                sx={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {fCurrency(earnedValue)}
              </Typography>
            </Tooltip>
            <Typography variant="caption" color="text.secondary">
              USD
            </Typography>
          </Stack>
        </Stack>
      </Fade>
    );
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2.5, pb: 1.5 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Stack spacing={0.5}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Iconify icon="fluent-color:trophy-20" width={24} sx={{ color: 'warning.main' }} />
              <Typography variant="h6" fontWeight={700}>
                Top Earners
              </Typography>
            </Stack>
            <Typography variant="caption" color="text.secondary">
              Elite contributors ranked by reward share
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Divider sx={{ opacity: 0.2 }} />
      <ScrollBar sx={{ flex: 1, minHeight: 300, maxHeight: 600, p: 2 }}>
        {loading ? (
          renderSkeleton
        ) : (
          <Stack spacing={1}>{parsed.map((item, i) => renderRow(item, i))}</Stack>
        )}
      </ScrollBar>
    </Card>
  );
}
