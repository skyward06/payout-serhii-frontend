import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { NewHomePage } from 'src/sections/NewHomepage';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} - Introduction` };

export default function IntroductionPage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <NewHomePage />
    </>
  );
}
