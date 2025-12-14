import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import StatisticsSection from 'src/sections/Statistics';

export default function StatisticsPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Statistics`}</title>
      </Helmet>

      <StatisticsSection />
    </>
  );
}
