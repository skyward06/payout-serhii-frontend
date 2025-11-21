import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { NewHomePage } from 'src/sections/newHomepage';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / Introduction` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <NewHomePage />
    </>
  );
}
