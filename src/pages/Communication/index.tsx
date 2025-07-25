import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Communication from 'src/sections/Communication';

export default function CommunicationPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Communication`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Communication"
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Communication />
    </>
  );
}
