import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import TXCRequestCreate from 'src/sections/TXCRequest/Create';

export default function TXCRequestCreatePage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - TXC Purchase`}</title>
      </Helmet>

      <Breadcrumbs
        heading="TXC Purchase"
        links={[{ name: 'TXC Purchase', href: paths.dashboard.txcRequest.root }, { name: 'New' }]}
        sx={{ mb: 2 }}
      />

      <TXCRequestCreate />
    </>
  );
}
