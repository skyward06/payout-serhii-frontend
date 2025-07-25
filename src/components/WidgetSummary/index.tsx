import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/formatNumber';

import { Iconify } from 'src/components/Iconify';
import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  loading: boolean;
  title: string;
  total: number;
  meta: number;
  metaText: string;
  chart: {
    colors?: string[];
    categories: string[];
    series: number[];
    options?: ChartOptions;
  };
};

export default function WidgetSummary({
  loading,
  title,
  meta,
  metaText,
  total,
  chart,
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [theme.palette.primary.main];

  const series = useMemo(() => [{ data: chart.series }], [chart]);

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    colors: chartColors,
    stroke: { width: 0 },
    xaxis: { categories: chart.categories },
    tooltip: {
      y: { formatter: (val) => fNumber(val), title: { formatter: () => '' } },
    },
    plotOptions: { bar: { borderRadius: 1.5, columnWidth: '64%' } },
    ...chart.options,
  });

  const renderTrending = (
    <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
      {loading ? (
        <Skeleton variant="text" sx={{ width: '100%', height: 24 }} />
      ) : (
        <>
          <Iconify
            width={24}
            icon={
              meta < 0
                ? 'solar:double-alt-arrow-down-bold-duotone'
                : 'solar:double-alt-arrow-up-bold-duotone'
            }
            sx={{ flexShrink: 0, color: 'success.main', ...(meta < 0 && { color: 'error.main' }) }}
          />
          <Box component="span" sx={{ typography: 'subtitle2' }}>
            {meta > 0 && '+'}

            {meta}

            <Box component="span" sx={{ color: 'text.secondary', typography: 'body2', pl: 1 }}>
              {metaText}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 3,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ typography: 'subtitle2' }}>{title}</Box>
        <Box sx={{ mt: 1.5, mb: 1, typography: 'h3' }}>
          {loading ? <Skeleton variant="text" sx={{ width: '40%', height: 48 }} /> : fNumber(total)}
        </Box>
        {renderTrending}
      </Box>

      {loading ? (
        <Skeleton variant="text" sx={{ width: 100, height: 60 }} />
      ) : (
        <Chart
          type="bar"
          loading={loading}
          series={series}
          options={chartOptions}
          width={60}
          height={40}
        />
      )}
    </Card>
  );
}
