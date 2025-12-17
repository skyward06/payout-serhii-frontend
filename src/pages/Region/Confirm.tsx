import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { ConfirmSubscribe } from 'src/sections/Region/ConfirmSubscribe';

export default function ConfirmSubscribePage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Confirm Unsubscribe`}</title>
      </Helmet>

      <ConfirmSubscribe />
    </>
  );
}
