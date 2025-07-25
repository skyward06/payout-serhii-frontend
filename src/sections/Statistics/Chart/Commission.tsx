import dayjs from 'dayjs';
import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { formatWeekNumber } from 'src/utils/format-time';

import { ChartSelect } from 'src/components/chart';
import { ChartMixed } from 'src/components/CustomChart';

import { useFetchCommissionByPeriod } from '../useApollo';

// ----------------------------------------------------------------------

const select = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function MemberReward() {
  const [selectedSeries, setSelectedSeries] = useState('Week');

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSelect = select.find((i) => i.label === selectedSeries);

  const { loading, commission } = useFetchCommissionByPeriod(currentSelect?.value!);

  return (
    <Card>
      <CardHeader
        title="Revenue & Commission"
        action={
          <ChartSelect
            options={select.map((item) => item.label)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
      />

      <ChartMixed
        loading={loading}
        chart={{
          categories: commission!.map((item) => item.base).reverse(),
          series: [
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
          options: {
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
          },
        }}
      />
    </Card>
  );
}
