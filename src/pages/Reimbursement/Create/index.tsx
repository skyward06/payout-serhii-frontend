import { Navigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { ReimbursementCreate } from 'src/sections/Reimbursement/Create';

import { useAuthContext } from 'src/auth/hooks';

export default function CreatePage() {
  const { loading, user } = useAuthContext();
  const disabled = !user?.reimbursementEnabled && !user?.isTexitRanger;

  if (!loading && disabled) {
    return <Navigate to={paths.page403} replace />;
  }

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

      <ReimbursementCreate />
    </>
  );
}
