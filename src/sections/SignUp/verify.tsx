import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/useBoolean';

import { Iconify } from 'src/components/Iconify';
import { LoadingScreen } from 'src/components/loading-screen';

export default function AmplifyVerifyView() {
  const loading = useBoolean();

  const info = (
    <>
      <Stack direction="row" justifyContent="center">
        <Iconify icon="fa:check-circle" color="#008220" width={60} />
      </Stack>

      <Stack spacing={1} sx={{ mt: 3, mb: 8, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Successfully Verified!
        </Typography>
      </Stack>

      <Link
        variant="subtitle2"
        sx={{
          cursor: 'pointer',
          textAlign: 'center',
        }}
        href={paths.auth.signIn}
      >
        Back to Sign In
      </Link>
    </>
  );

  return <>{loading.value ? info : <LoadingScreen />}</>;
}
