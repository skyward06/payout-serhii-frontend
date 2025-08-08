import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';

import { Chart, useChart } from 'src/components/chart';

import { useFetchMemberByCountry } from '../useApollo';

export default function MemberByCountry() {
  const theme = useTheme();
  const { loading, members } = useFetchMemberByCountry();

  const series = useMemo(() => members.map((item) => item?.memberCount ?? 0), [members]);

  const baseColors = [
    theme.palette.info.main,
    theme.palette.error.main,
    theme.palette.warning.main,
    theme.palette.primary.main,
    theme.palette.success.main,
    theme.palette.secondary.main,
  ];

  const darkColors = [
    theme.palette.info.darker,
    theme.palette.error.darker,
    theme.palette.primary.darker,
    theme.palette.success.darker,
    theme.palette.warning.darker,
    theme.palette.secondary.darker,
  ];

  const colors = [
    ...baseColors,
    ...darkColors,
    ...darkColors.map((color) => hexAlpha(color, 0.7)),
    ...darkColors.map((color) => hexAlpha(color, 0.9)),
  ];

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    labels: members.map((item) => item?.country ?? ''),
    stroke: { width: 0 },
    colors,
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter(val, opts) {
        return `${(+val).toFixed(2)}%`;
      },
    },
  });

  return (
    <Card>
      <Box typography="h6" p="24px 16px 0 24px">
        Miners By Country
      </Box>

      <Box p={2}>
        <Chart
          type="donut"
          loading={loading}
          series={series}
          options={chartOptions}
          sx={{ mx: 'auto', width: 306, height: 306 }}
        />
      </Box>
    </Card>
  );
}
