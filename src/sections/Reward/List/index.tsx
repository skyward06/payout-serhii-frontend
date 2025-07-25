import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useTabs } from 'src/hooks/use-tabs';

import { Iconify } from 'src/components/Iconify';

import Wallets from './Wallets';
import StatisticsTable from './Daily';

const TABS = [
  {
    value: 'daily',
    label: 'Daily',
    icon: <Iconify icon="carbon:analytics" width={24} />,
  },
  { value: 'wallets', label: 'Wallets', icon: <Iconify icon="bxs:wallet" width={24} /> },
];

export default function RewardListView() {
  const tabs = useTabs('daily');

  return (
    <>
      <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 2, md: 3 } }}>
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      {tabs.value === 'daily' && <StatisticsTable />}

      {tabs.value === 'wallets' && <Wallets />}
    </>
  );
}
