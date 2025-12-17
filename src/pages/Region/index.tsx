import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { EmailRegionList } from 'src/sections/Region';

export default function EmailRegionPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Email Region`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Email Region"
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <EmailRegionList />
    </>
  );
}
