import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

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
        data: statistics.map((item) => item?.txcShared ?? 0).reverse(),
        type: 'area',
      },
      {
        name: 'Hash Power',
        data: statistics.map((item) => item?.hashPower ?? 0).reverse(),
        type: 'area',
      },
    ],
    [statistics]
  );

  const chartOptions = useChart({
    xaxis: {
      tickAmount: 12,
      tooltip: { enabled: true },
      categories: statistics.map((item) => `${formatDate(item?.issuedAt!, 'MM/DD')}`).reverse(),
    },
    yaxis: [
      {
        labels: {
          formatter(val) {
            return `${val / 10 ** 8}`;
          },
        },
      },
      {
        show: false,
      },
    ],
  });

  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box width={6} height={24} bgcolor="primary.main" borderRadius={1} />
            <Typography variant="h6" fontWeight={600} color="text.primary">
              Reward History
            </Typography>
          </Stack>
        }
      />

      <Box p={2}>
        <Chart type="area" loading={loading} series={series} options={chartOptions} height={480} />
      </Box>
    </Card>
  );
}
