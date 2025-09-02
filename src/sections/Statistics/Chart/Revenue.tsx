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

  const totalRevenue = revenue?.filter((item) => item.type === 'INCOME')[0].total ?? 0;

  const incomeRevenue =
    totalRevenue -
    (revenue
      ?.filter((item) => item.type !== 'INCOME')
      .reduce((prev, save) => prev + save.total, 0) ?? 0);

  const series = useMemo(
    () => [
      incomeRevenue,
      ...(revenue?.filter((item) => item.type !== 'INCOME').map((item) => item.total) ?? []),
    ],
    [revenue, incomeRevenue]
  );

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

  const colors = [...baseColors, ...darkColors, ...darkColors.map((color) => hexAlpha(color, 0.7))];

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    labels: revenue?.map((item) => item.type),
    stroke: { width: 0 },
    colors,
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            total: {
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
    tooltip: { style: { fontSize: '14px' } },
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
          width={307}
          height={307}
          sx={{ mx: 'auto' }}
        />
      </Box>
    </Card>
  );
}
