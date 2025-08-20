import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';

import { formatNumber } from 'src/utils/formatNumber';
import { formatWeekNumber } from 'src/utils/format-time';

import { Chart, useChart, ChartSelect } from 'src/components/chart';

import { useFetchCommissionByPeriod } from '../useApollo';

// ----------------------------------------------------------------------

const select = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function MemberReward() {
  const theme = useTheme();
  const [selectedSeries, setSelectedSeries] = useState('Week');

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSelect = select.find((i) => i.label === selectedSeries);

  const { loading, commission } = useFetchCommissionByPeriod(currentSelect?.value!);

  const chartColors = [hexAlpha(theme.palette.primary.dark, 0.8), theme.palette.warning.main];

  const series = useMemo(
    () => [
      {
        name: 'Commission',
        type: 'column',
        data: commission.map((item) => item.commission).reverse(),
      },
      {
        name: 'Revenue',
        type: 'area',
        data: commission.map((item) => item.revenue).reverse(),
      },
    ],
    [commission]
  );

  const chartOptions = useChart({
    colors: chartColors,
    stroke: { width: [0, 2] },
    fill: { type: ['solid', 'gradient'] },
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      tickAmount: 10,
      categories: commission!
        .map((item) =>
          currentSelect?.value === 'week'
            ? `#${formatWeekNumber(item.baseDate)} (${dayjs(item.baseDate).utc().format('MM/DD')} - ${dayjs(item.baseDate).utc().add(6, 'day').format('MM/DD')})`
            : item.base
        )
        .reverse(),
    },
    yaxis: { labels: { formatter: (val) => formatNumber(val) } },
    tooltip: {
      y: {
        formatter(val) {
          return formatNumber(val);
        },
      },
    },
  });

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" typography="h6" p="24px 16px 0 24px">
        Revenue & Commission
        <ChartSelect
          options={select.map((item) => item.label)}
          value={selectedSeries}
          onChange={handleChangeSeries}
        />
      </Box>

      <Box p={2}>
        <Chart type="line" loading={loading} series={series} options={chartOptions} height={300} />
      </Box>
    </Card>
  );
}
