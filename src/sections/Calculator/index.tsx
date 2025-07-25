import { paths } from 'src/routes/paths';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import CalculatorForm from './Form';

export default function Calculator() {
  return (
    <>
      <Breadcrumbs
        heading="Calculator"
        links={[{ name: 'Calculator', href: paths.dashboard.calculator.root }, { name: 'View' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <CalculatorForm />
    </>
  );
}
