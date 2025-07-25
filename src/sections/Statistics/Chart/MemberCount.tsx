import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { formatWeekNumber } from 'src/utils/format-time';

import { Chart, useChart, ChartSelect } from 'src/components/chart';

import { useFetchMemberCounts } from '../useApollo';

// ----------------------------------------------------------------------

const select = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function MemberCount() {
  const [selectedSeries, setSelectedSeries] = useState('Day');
  const theme = useTheme();

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSelect = select.find((i) => i.label === selectedSeries);

  const { loading, memberCount } = useFetchMemberCounts(currentSelect?.value!);

  const series = useMemo(
    () => [
      {
        name: 'Miners',
        data: memberCount.map((item) => item.minerCount).reverse(),
      },
    ],
    [memberCount]
  );

  const chartOptions = useChart({
    stroke: { width: 0 },
    plotOptions: {
      bar: { columnWidth: '80%' },
    },
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      tickAmount: 10,
      categories: memberCount!
        .map((item) =>
          currentSelect?.value === 'week'
            ? `#${formatWeekNumber(item.baseDate)} (${dayjs(item.baseDate).utc().format('MM/DD')} - ${dayjs(item.baseDate).utc().add(6, 'day').format('MM/DD')})`
            : item.base
        )
        .reverse(),
    },
    yaxis: {
      labels: {
        formatter(val) {
          return `${Math.floor(val)}`;
        },
      },
    },
    colors: [alpha(theme.palette.success.darker, 0.8)],
  });

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" typography="h6" p="24px 16px 0 24px">
        New Miners
        <ChartSelect
          options={select.map((item) => item.label)}
          value={selectedSeries}
          onChange={handleChangeSeries}
        />
      </Box>

      <Box p={2}>
        <Chart type="bar" loading={loading} series={series} options={chartOptions} height={300} />
      </Box>
    </Card>
  );
}
