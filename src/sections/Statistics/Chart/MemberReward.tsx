import type { PeriodStateType } from 'src/__generated__/graphql';

import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { formatWeekNumber } from 'src/utils/format-time';

import { Chart, useChart, ChartSelect } from 'src/components/chart';

import { useFetchMemberReward } from '../useApollo';

// ----------------------------------------------------------------------

const select = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function MemberReward() {
  const [selectedSeries, setSelectedSeries] = useState('Day');
  const theme = useTheme();

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSelect = select.find((i) => i.label === selectedSeries);

  const { loading, memberReward } = useFetchMemberReward(currentSelect?.value as PeriodStateType);

  const series = useMemo(
    () => [
      {
        name: 'Reward',
        data: memberReward.map((item) => Number(item.reward.toFixed(8))).reverse(),
      },
    ],
    [memberReward]
  );

  const chartOptions = useChart({
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      tickAmount: 10,
      categories: memberReward!
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
    tooltip: {
      y: {
        formatter(val) {
          return val.toFixed(8);
        },
      },
    },
    colors: [alpha(theme.palette.info.dark, 0.8)],
  });

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" typography="h6" p="24px 16px 0 24px">
        Average per Miner
        <ChartSelect
          options={select.map((item) => item.label)}
          value={selectedSeries}
          onChange={handleChangeSeries}
        />
      </Box>

      <Box p={2}>
        <Chart type="area" loading={loading} series={series} options={chartOptions} height={300} />
      </Box>
    </Card>
  );
}
