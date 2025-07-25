import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import RewardList from 'src/sections/Reward/List';

export default function RewardPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Reward`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Reward"
        links={[{ name: 'Reward', href: paths.dashboard.reward.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <RewardList />
    </>
  );
}
