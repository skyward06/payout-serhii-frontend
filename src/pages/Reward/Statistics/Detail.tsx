import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import StatisticsDetail from 'src/sections/Reward/Statistics/Detail';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Reward`}</title>
      </Helmet>

      <StatisticsDetail />
    </>
  );
}
