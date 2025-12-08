import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

export default function ACHPage() {
  return (
    <>
      <Helmet>{`${CONFIG.site.basePath} - ACH Form`}</Helmet>
      {/* <ACHForm /> */}
    </>
  );
}
