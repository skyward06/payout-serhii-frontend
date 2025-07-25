import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { LoadingScreen } from 'src/components/loading-screen';

import TeamCommission from 'src/sections/TeamCommission';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function TeamPage() {
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
        <title>{`${CONFIG.site.name} - Team`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Team"
        links={[{ name: 'Team', href: paths.dashboard.team.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <TeamCommission me={user} />
    </>
  );
}
