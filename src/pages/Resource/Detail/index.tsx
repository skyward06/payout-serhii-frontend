import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import ResourceDetailPage from 'src/sections/Resource/Detail';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Resource`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Resource"
        links={[{ name: 'Resource', href: paths.dashboard.resource.root }, { name: 'Detail' }]}
        sx={{
          mb: { xs: 2, md: 3 },
        }}
      />

      <ResourceDetailPage />
    </>
  );
}
