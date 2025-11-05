import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { ConfirmAddress } from 'src/sections/ConfirmAddress';

export default function ConfirmAddressPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.basePath} - Confirm Address`}</title>
      </Helmet>

      <ConfirmAddress />
    </>
  );
}
