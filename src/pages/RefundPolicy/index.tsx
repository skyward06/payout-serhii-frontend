import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { RefundPolicyView } from 'src/sections/RefundPolicy';

export default function RefundPolicyPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.basePath} - Refund Policy`}</title>
      </Helmet>

      <RefundPolicyView />
    </>
  );
}
