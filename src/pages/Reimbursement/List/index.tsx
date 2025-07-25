import { Helmet } from 'react-helmet-async';

import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { ReimbursementList } from 'src/sections/Reimbursement/List';

export default function ReimbursementPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Reimbursement`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Reimbursement"
        links={[
          { name: 'Reimbursement', href: paths.dashboard.reimbursement.root },
          { name: 'List' },
        ]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
        action={
          <Button
            component={RouterLink}
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="mingcute:add-line" />}
            href="new"
          >
            New
          </Button>
        }
      />

      <ReimbursementList />
    </>
  );
}
