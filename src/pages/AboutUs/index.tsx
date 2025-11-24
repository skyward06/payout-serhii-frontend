import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { AboutUs } from 'src/sections/AboutUs';

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Meet the Team`}</title>
      </Helmet>

      <AboutUs />
    </>
  );
}
