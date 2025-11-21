import { Helmet } from 'react-helmet-async';

import { ComingSoonView } from 'src/sections/ComingSoon';

export default function ComingSoonPage() {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>

      <ComingSoonView />
    </>
  );
}
