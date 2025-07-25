import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { CreateForm } from 'src/sections/Reimbursement/Create';

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Reimbursement`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Reimbursement"
        links={[
          { name: 'Reimbursement', href: paths.dashboard.reimbursement.root },
          { name: 'New' },
        ]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <CreateForm />
    </>
  );
}
