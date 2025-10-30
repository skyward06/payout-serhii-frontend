import { useLocation } from 'react-router';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { COUNTRY } from 'src/consts';

import { toast } from 'src/components/SnackBar';

import { useAuthContext } from 'src/auth/hooks';

export function ActivationView() {
  const router = useRouter();
  const { state } = useLocation();

  const { user, loading } = useAuthContext();

  const handleActivate = () => {
    if (user?.country !== COUNTRY.USA && user?.memberWallets?.length === 0) {
      toast.error('Please add a wallet first');
    } else {
      router.push(paths.dashboard.profile.activation, { state: { isModal: true } });
    }
  };

  return (
    <Stack spacing={2}>
      {(state?.isModal || !loading) && !user?.activated && (
        <Alert severity="error" variant="outlined">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
            <Typography variant="body2" display="flex" gap={0.5}>
              Your account is not activate. Click{' '}
              <Link variant="body2" sx={{ cursor: 'pointer' }} onClick={handleActivate}>
                here
              </Link>
              to activate
            </Typography>
          </Stack>
        </Alert>
      )}

      {(state?.isModal || !loading) && Number(user?.totalTXCNotReceived) !== 0 && (
        <Alert
          severity="warning"
          variant="outlined"
        >{`You did not received ${Number(user?.totalTXCNotReceived) / 10 ** 8} TXC`}</Alert>
      )}
    </Stack>
  );
}
