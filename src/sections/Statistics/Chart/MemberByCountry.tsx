import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { Chart, useChart } from 'src/components/chart';

import { useFetchMemberByCountry } from '../useApollo';

export default function MemberByCountry() {
  const { loading, members } = useFetchMemberByCountry();

  const series = useMemo(() => members.map((item) => item?.memberCount ?? 0), [members]);

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    labels: members.map((item) => item?.country ?? ''),
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter(val, opts) {
        return `${(+val).toFixed(2)}%`;
      },
    },
  });

  return (
    <Card>
      <Box typography="h6" p="24px 16px 0 24px">
        Miners By Country
      </Box>

      <Box p={2}>
        <Chart
          type="donut"
          loading={loading}
          series={series}
          options={chartOptions}
          sx={{ mx: 'auto', width: 306, height: 306 }}
        />
      </Box>
    </Card>
  );
}
