import { Helmet } from 'react-helmet-async';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Profile from 'src/sections/Profile';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function ProfilePage() {
  const { loading, user } = useAuthContext();

  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - My account`}</title>
      </Helmet>

      <Stack spacing={2}>
        {!loading && !user?.activated && (
          <Alert severity="error" variant="outlined">
            Your account is not activate. To received daily reward, please activate your account.
          </Alert>
        )}

        {!loading && (user?.totalTXCNotReceived ?? 0) !== 0 && (
          <Alert
            severity="warning"
            variant="outlined"
          >{`You did not received ${Number(user?.totalTXCNotReceived) / 10 ** 8} TXC`}</Alert>
        )}
      </Stack>

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
