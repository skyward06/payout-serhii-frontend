import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';

import { formatCurrency } from 'src/utils/formatCurrency';

import { Chart, useChart } from 'src/components/chart';

import { useFetchRevenue } from '../useApollo';

// ----------------------------------------------------------------------

export default function RevenueOverview() {
  const theme = useTheme();
  const { loading, revenue } = useFetchRevenue();

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

  const series = useMemo(
    () => [
      revenue.total - revenue.spent.reduce((prev, cur) => prev + (cur?.value ?? 0), 0),
      ...revenue.spent.map((spt) => spt?.value ?? 0),
    ],
    [revenue]
  );

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    labels: ['Income', ...revenue.spent.map((item) => item?.label ?? '')],
    stroke: { width: 0 },
    colors,
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              formatter(w) {
                return formatCurrency(
                  w.globals.seriesTotals.reduce((prev: any, save: any) => prev + save, 0)
                );
              },
            },
            value: {
              show: true,
              formatter(val) {
                return formatCurrency(+val);
              },
            },
          },
        },
      },
    },
    yaxis: {
      labels: {
        formatter(val) {
          return formatCurrency(val);
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${(+val).toFixed(2)}%`;
      },
    },
  });

  return (
    <Card>
      <Box typography="h6" p="24px 16px 0 24px">
        Use of Funds
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
