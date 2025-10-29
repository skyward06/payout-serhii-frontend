import type { PeriodStateType } from 'src/__generated__/graphql';

import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

import { fHashRate } from 'src/utils/formatNumber';

import { Chart, useChart, ChartSelect } from 'src/components/chart';

import { useFetchBlocks } from '../useApollo';

// ----------------------------------------------------------------------

const select = [
  { value: 'block', label: 'Block' },
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

export default function HashPower() {
  const theme = useTheme();
  const [selectedSeries, setSelectedSeries] = useState('Block');

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSelect = select.find((i) => i.label === selectedSeries);

  const { loading, blocks } = useFetchBlocks(currentSelect?.value as PeriodStateType);

  const chartColors = [theme.palette.primary.main, theme.palette.warning.main];

  const series = useMemo(
    () => [
      {
        name: 'Purchased HashPower',
        data: blocks!.map((item) => (item?.purchasedHashPower ?? 0) * 10 ** 6).reverse(),
        type: 'area',
      },
      {
        name: 'Sold HashPower',
        data: blocks!.map((item) => item.soldHashPower * 10 ** 6).reverse(),
        type: 'area',
      },
    ],
    [blocks]
  );

  const chartOptions = useChart({
    legend: {
      show: true,
      position: 'top',
      markers: { radius: 0, width: 15, height: 3, offsetY: 5 },
    },
    xaxis: {
      tickAmount: 12,
      categories: blocks!
        .map((item) =>
          currentSelect?.value === 'week'
            ? dayjs(item.baseDate).utc().format('MM/DD')
            : currentSelect?.value === 'day'
              ? dayjs(item.base).format('MM/DD')
              : item.base
        )
        .reverse(),
    },
    yaxis: { labels: { formatter: (val: any) => fHashRate(val) } },
    colors: chartColors,
  });

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" typography="h6" p="24px 16px 0 24px">
        Hash Power
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
