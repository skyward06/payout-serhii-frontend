import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import TXCRequestCreate from 'src/sections/TXCRequest/Create';

export default function TXCRequestCreatePage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - TXC Request`}</title>
      </Helmet>

      <Breadcrumbs
        heading="TXC Request"
        links={[{ name: 'TXC Request', href: paths.dashboard.txcRequest.root }, { name: 'New' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <TXCRequestCreate />
    </>
  );
}
