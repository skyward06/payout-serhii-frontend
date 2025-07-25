import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Calculator from 'src/sections/Calculator';

export default function CalculatorPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Commission`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Calculator"
        links={[{ name: 'Calculator', href: paths.dashboard.calculator.root }, { name: 'View' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Calculator />
    </>
  );
}
