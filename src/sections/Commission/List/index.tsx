import type { LabelColor } from 'src/components/Label';

import { useState, useEffect } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';

import { useAgQuery } from 'src/routes/hooks';

import { useTabs } from 'src/hooks/use-tabs';

import { COMMISSION_STATUS } from 'src/consts';
import { CommissionStatus } from 'src/__generated__/graphql';

import { Label } from 'src/components/Label';

import { CommissionTable } from './CommissionTable';
import { useFetchCommissionStats } from '../useApollo';

import type { CommissionRole } from './type';

const TABS: { value: CommissionRole; label: string; color: LabelColor }[] = [
  { value: 'approved', label: 'Approved', color: 'primary' },
  { value: 'pending', label: 'Pending', color: 'warning' },
  { value: 'suspended', label: 'Suspended', color: 'error' },
  { value: 'archived', label: 'Archived', color: 'default' },
];
export function CommissionList() {
  const tabs = useTabs(CommissionStatus.Approved.toLowerCase());
  const [customFilter, setCustomFilter] = useState<any>();
  const [query, { setFilter }] = useAgQuery();
  const { data, fetchCommissionStats } = useFetchCommissionStats();

  const { filter = { status: CommissionStatus.Approved.toLowerCase() } } = query;

  const handleTabChange = (event: any, newValue: any) => {
    tabs.onChange(event, newValue);
    setFilter({});
    setCustomFilter({});
  };

  useEffect(() => {
    fetchCommissionStats({
      variables: {
        suspendedFilter: {
          status: COMMISSION_STATUS.SUSPENDED.label,
        },
        pendingFilter: {
          status: COMMISSION_STATUS.PENDING.label,
        },
        approvedFilter: {
          status: COMMISSION_STATUS.APPROVED.label,
        },
        archivedFilter: {
          status: COMMISSION_STATUS.ARCHIVED.label,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Tabs
        value={tabs.value}
        onChange={handleTabChange}
        orientation="vertical"
        sx={{
          minWidth: 160,
          borderRight: 1,
          borderColor: 'divider',
          [`& .MuiTabs-flexContainer`]: { gap: 0 },
          [`& .MuiTabs-flexContainerVertical`]: {
            padding: '16px',
          },
        }}
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.value}
            iconPosition="end"
            label={
              <Stack direction="row" flexGrow={1}>
                {tab.label}
              </Stack>
            }
            value={tab.value}
            icon={
              <Label
                variant={(tab.value === filter.status && 'filled') || 'soft'}
                color={tab.color}
              >
                {data ? data[tab.value].total! : 0}
              </Label>
            }
          />
        ))}
      </Tabs>
      <CommissionTable status={tabs.value} customFilter={customFilter} />
    </>
  );
}
