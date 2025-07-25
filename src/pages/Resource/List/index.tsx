import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import ResourceList from 'src/sections/Resource/List';

export default function ResourceListPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Resource`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Resource"
        links={[{ name: 'Resource', href: paths.dashboard.resource.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 2, md: 3 },
        }}
      />

      <ResourceList />
    </>
  );
}
