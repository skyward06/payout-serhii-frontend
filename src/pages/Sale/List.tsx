import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import SaleList from 'src/sections/Sales/List';
import { ActionView } from 'src/sections/Sales/ActionView';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Orders`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Order"
        sx={{
          mb: { xs: 1, md: 2 },
        }}
        action={<ActionView />}
      />

      <SaleList />
    </>
  );
}
