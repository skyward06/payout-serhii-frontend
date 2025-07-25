import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { LoadingScreen } from 'src/components/loading-screen';

import CommissionList from 'src/sections/Commission/List';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function CommissionPage() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to={paths.notFound} replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Commission`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Commission"
        links={[{ name: 'Commission', href: paths.dashboard.commission.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <CommissionList me={user} />
    </>
  );
}
