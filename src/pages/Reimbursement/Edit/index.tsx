import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { ReimbursementEdit } from 'src/sections/Reimbursement/Edit';

export default function ReimbursementEditPage() {
  return (
    <>
      <title>{`${CONFIG.site.name} - Reimbursement`}</title>

      <Breadcrumbs
        heading="Reimbursement"
        links={[
          { name: 'Reimbursement', href: paths.dashboard.reimbursement.root },
          { name: 'Edit' },
        ]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <ReimbursementEdit />
    </>
  );
}
