import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import InvoiceList from 'src/sections/Invoice/List';

// ----------------------------------------------------------------------

export default function InvoicePage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Invoice`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Invoice"
        links={[{ name: 'Invoice', href: paths.dashboard.invoice.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <InvoiceList />
    </>
  );
}
