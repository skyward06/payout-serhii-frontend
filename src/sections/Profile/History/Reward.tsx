import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { formatDate } from 'src/utils/format-time';

import { Chart, useChart } from 'src/components/chart';

import { useAuthContext } from 'src/auth/hooks';

import { useFetchMemberStatistics } from '../useApollo';

export default function Reward() {
  const { user } = useAuthContext();
  const { loading, statistics } = useFetchMemberStatistics({ memberId: user?.id! });

  const series = useMemo(
    () => [
      {
        name: 'TXC Shared',
        data: statistics.map((item) => (item?.txcShared ?? 0) / 10 ** 8).reverse(),
      },
      {
        name: 'Hash Power',
        data: statistics.map((item) => item?.hashPower ?? 0).reverse(),
      },
    ],
    [statistics]
  );

  const chartOptions = useChart({
    plotOptions: {
      bar: {
        columnWidth: '80%',
      },
    },
    xaxis: {
      tooltip: { enabled: true },
      categories: statistics.map((item) => `${formatDate(item?.issuedAt!, 'MM/DD')}`).reverse(),
    },
    yaxis: {
      labels: {
        formatter(val) {
          return `${Math.floor(val)}`;
        },
      },
    },
  });

  return (
    <Card>
      <Box typography="h6" px={3} pt={3}>
        Reward
      </Box>

      <Box p={2}>
        <Chart type="bar" loading={loading} series={series} options={chartOptions} height={480} />
      </Box>
    </Card>
  );
}
