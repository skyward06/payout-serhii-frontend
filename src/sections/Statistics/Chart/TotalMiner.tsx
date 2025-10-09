import type { PeriodStateType } from 'src/__generated__/graphql';

import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { formatNumber } from 'src/utils/formatNumber';

import { Chart, useChart, ChartSelect } from 'src/components/chart';

import { useFetchTotalMiner } from '../useApollo';

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

  const currentSeries = select.find((i) => i.label === selectedSeries);

  const { loading, totalMiner } = useFetchTotalMiner(currentSeries?.value as PeriodStateType);

  const series = useMemo(
    () => [
      {
        name: 'Miners',
        data: totalMiner.map((item) => item.minerCount).reverse(),
      },
    ],
    [totalMiner]
  );

  const chartOptions = useChart({
    xaxis: {
      categories: totalMiner!
        .map((item) =>
          currentSeries?.value === 'week'
            ? dayjs(item.baseDate).utc().format('MM/DD')
            : currentSeries?.value === 'day'
              ? dayjs(item.base).format('MM/DD')
              : item.base
        )
        .reverse(),
    },
    yaxis: { labels: { formatter: (val) => formatNumber(val) } },
    colors: [alpha(theme.palette.warning.main, 0.8)],
  });

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" typography="h6" p="24px 16px 0 24px">
        Total Miners
        <ChartSelect
          options={select.map((item) => item.label)}
          value={selectedSeries}
          onChange={handleChangeSeries}
        />
      </Box>

      <Box p={2}>
        <Chart type="area" loading={loading} series={series} options={chartOptions} height={330} />
      </Box>
    </Card>
  );
}
