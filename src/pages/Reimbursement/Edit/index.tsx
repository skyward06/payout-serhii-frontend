import { Navigate } from 'react-router';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { ReimbursementEdit } from 'src/sections/Reimbursement/Edit';

import { useAuthContext } from 'src/auth/hooks';

export default function ReimbursementEditPage() {
  const { loading, user } = useAuthContext();
  const disabled = !user?.reimbursementEnabled && !user?.isTexitRanger;

  if (!loading && disabled) {
    return <Navigate to={paths.page403} replace />;
  }

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
