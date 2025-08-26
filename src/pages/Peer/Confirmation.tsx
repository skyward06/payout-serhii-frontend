import { CONFIG } from 'src/config';

import { PeerConfirmation } from 'src/sections/Peer/Confirmation';

export default function PeerConfirmationPage() {
  return (
    <>
      <title>{`${CONFIG.site.basePath} - Peer Confirmation`}</title>

      <PeerConfirmation />
    </>
  );
}
