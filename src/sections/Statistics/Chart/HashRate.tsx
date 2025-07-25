import type { ApexOptions } from 'apexcharts';

import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { formatWeekNumber } from 'src/utils/format-time';

import { Chart, ChartSelect } from 'src/components/chart';

import { useFetchBlocks } from '../useApollo';

// ----------------------------------------------------------------------

const select = [
  { value: 'block', label: 'Block' },
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

export default function HashRate() {
  const [selectedSeries, setSelectedSeries] = useState('Block');

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSelect = select.find((i) => i.label === selectedSeries);

  const { loading, blocks } = useFetchBlocks(currentSelect?.value!);

  const series = useMemo(
    () => [
      {
        name: 'Hashrate',
        data: blocks!
          .map((item) => Number(((item?.hashRate! || 1) / 10 ** 9).toFixed(2)))
          .reverse(),
        type: 'area',
      },
      {
        name: 'Sold HashPower',
        data: blocks!.map((item) => item.soldHashPower / 1000).reverse(),
        type: 'line',
      },
    ],
    [blocks]
  );

  const chartOptions: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: [2.5, 2.5],
    },
    grid: { show: false },
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      tickAmount: 30,
      categories: blocks!
        .map((item) =>
          currentSelect?.value === 'week'
            ? `#${formatWeekNumber(item.baseDate)} (${dayjs(item.baseDate).utc().format('MM/DD')} - ${dayjs(item.baseDate).utc().add(6, 'day').format('MM/DD')})`
            : item.base
        )
        .reverse(),
    },
    yaxis: [
      {
        title: {
          text: 'HashRate',
        },
        labels: {
          formatter: (value: number) => `${Math.floor(value)} GH/s`,
        },
      },
      {
        opposite: true,
        title: {
          text: 'Sold HashPower',
        },
        labels: {
          formatter: (value: number) => `${value} GH/s`,
        },
        min: 0,
      },
    ],
    colors: ['#228a7c', '#ca2f31'],
    fill: {
      opacity: 0.6,
    },
    legend: { show: false },
  };

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" typography="h6" p="24px 16px 0 24px">
        Hash Rate
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
