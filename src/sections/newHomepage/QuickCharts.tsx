import { m } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { fHashRate, formatNumber } from 'src/utils/formatNumber';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useFetchSeatFilled, useFetchCurrentHashRate } from './useApollo';
import { useFetchRevenue, useFetchMemberByCountry } from '../Statistics/useApollo';

// ----------------------------------------------------------------------

function AnimatedCounter({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  formatter,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatter?: (val: number) => string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return (
    <>
      {prefix}
      {formatter ? formatter(count) : formatNumber(count)}
      {suffix}
    </>
  );
}

// ----------------------------------------------------------------------

export function QuickCharts() {
  const th = useTheme();
  const smUp = useMediaQuery(th.breakpoints.up('sm'));

  const { revenue } = useFetchRevenue();
  const { seatFilled } = useFetchSeatFilled();
  const { members } = useFetchMemberByCountry();
  const { hashrate } = useFetchCurrentHashRate();

  const totalMembers = members.reduce((sum, country) => sum + country.memberCount, 0);
  const totalRevenue = revenue?.filter((item) => item.type === 'INCOME')[0].total ?? 0;
  const totalCommission = revenue?.filter((item) => item.type === 'COMMISSION')[0].total ?? 0;

  const charts = useMemo(
    () =>
      [
        {
          title: 'Total Miners',
          total: totalMembers,
          icon: 'mdi:account-group',
          colorKey: 'success',
        },
        {
          title: 'Total Revenue',
          total: totalRevenue,
          icon: 'mdi:cash-multiple',
          colorKey: 'info',
        },
        {
          title: 'Seats Filled',
          total: seatFilled,
          icon: 'mdi:seat',
          colorKey: 'warning',
        },
        {
          title: 'Current Hashrate',
          total: hashrate,
          icon: 'mdi:speedometer',
          colorKey: 'error',
        },
        {
          title: 'Total Commission',
          total: totalCommission,
          icon: 'mdi:trophy',
          colorKey: 'primary',
        },
      ] as const,
    [totalMembers, totalRevenue, seatFilled, hashrate, totalCommission]
  );

  return (
    <Box pt={{ xs: 6, md: 8 }} bgcolor="background.default">
      <Container component={MotionViewport}>
        <Grid container spacing={2}>
          {charts.map((chart) => (
            <Grid key={chart.title} xs={6} sm={4} md={2.4}>
              <m.div variants={varFade().inUp}>
                <Card
                  sx={{
                    p: 2.5,
                    height: '100%',
                    bgcolor: 'background.paper',
                    transition: 'all 0.3s ease-in-out',
                    border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.08)}`,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.customShadows.z12,
                      borderColor: (theme) => alpha(theme.palette[chart.colorKey].main, 0.24),
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    {smUp && (
                      <Box
                        width={60}
                        height={60}
                        flexShrink={0}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius={1.5}
                        bgcolor={(theme) => alpha(theme.palette[chart.colorKey].main, 0.08)}
                      >
                        <Iconify
                          icon={chart.icon}
                          width={32}
                          sx={{ color: `${chart.colorKey}.main` }}
                        />
                      </Box>
                    )}
                    <Stack spacing={0.5} alignItems="flex-start" minWidth={0}>
                      <Typography variant="h6" fontWeight={700} noWrap>
                        {chart.title === 'Total Revenue' ? (
                          <AnimatedCounter value={chart.total} prefix="$" />
                        ) : chart.title === 'Current Hashrate' ? (
                          <AnimatedCounter value={chart.total} formatter={fHashRate} />
                        ) : chart.title === 'Seats Filled' ? (
                          <AnimatedCounter value={chart.total} suffix="%" />
                        ) : (
                          <AnimatedCounter value={chart.total} />
                        )}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" noWrap>
                        {chart.title}
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
