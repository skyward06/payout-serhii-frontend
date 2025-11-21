import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { ComingSoonView } from 'src/sections/ComingSoon';

export default function ComingSoonPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Coming Soon`}</title>
      </Helmet>

      <ComingSoonView />
    </>
  );
}
