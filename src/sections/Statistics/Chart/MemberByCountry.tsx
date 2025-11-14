import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/formatNumber';

import { COUNTRY } from 'src/consts';

import { Chart, useChart } from 'src/components/chart';

import { useFetchMemberByCountry } from '../useApollo';

const mainCountries = [
  COUNTRY.USA,
  COUNTRY.TEXAS,
  COUNTRY.AUSTRALIA,
  COUNTRY.NEW_ZEALAND,
  COUNTRY.CANADA,
];

export default function MemberByCountry() {
  const theme = useTheme();
  const { loading, members } = useFetchMemberByCountry();

  const grouped = useMemo(() => {
    const result: { country: string; memberCount: number }[] = [];
    let otherCount = 0;

    members.forEach((item) => {
      const country = item?.country ?? '';
      const count = item?.memberCount ?? 0;
      if (mainCountries.includes(country)) {
        result.push({ country, memberCount: count });
      } else {
        otherCount += count;
      }
    });

    result.push({ country: 'Other', memberCount: otherCount });

    return result;
  }, [members]);

  const series = useMemo(() => grouped.map((item) => item?.memberCount ?? 0), [grouped]);

  const baseColors = [
    theme.palette.success.main,
    theme.palette.info.main,
    theme.palette.warning.main,
    theme.palette.primary.main,
    theme.palette.error.main,
    theme.palette.secondary.main,
  ];

  const colors = [...baseColors];

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    labels: grouped.map((item) => item?.country ?? ''),
    stroke: { width: 0 },
    colors,
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            total: {
              formatter(w) {
                return fNumber(
                  w.globals.seriesTotals.reduce((prev: any, save: any) => prev + save, 0)
                );
              },
            },
            value: {
              show: true,
              formatter(val) {
                return fNumber(+val);
              },
            },
          },
        },
      },
    },
    yaxis: {
      labels: {
        formatter(value) {
          return fNumber(value);
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
          sx={{ mx: 'auto', mt: 2, width: 300, height: 320 }}
        />
      </Box>
    </Card>
  );
}
