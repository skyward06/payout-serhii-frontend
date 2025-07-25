import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Profile from 'src/sections/Profile';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - My account`}</title>
      </Helmet>

      <Breadcrumbs
        heading="My account"
        sx={{
          mb: { xs: 2, md: 3 },
        }}
      />

      <Profile />
    </>
  );
}
