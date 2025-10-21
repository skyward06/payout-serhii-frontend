import { useState } from 'react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/useBoolean';

import { COUNTRY } from 'src/consts';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { useAuthContext } from 'src/auth/hooks';

import { useActivateMember } from '../useApollo';
import { TransactionModal } from './TransactionModal';
import { ActivateModal } from '../History/Setting/ActivateModal';

export function ActivationView() {
  const active = useBoolean();
  const transactionOpen = useBoolean();

  const [txHash, setTxHash] = useState<string>();

  const { user, loading } = useAuthContext();
  const { loading: activating, activateMember } = useActivateMember();

  const handleActivate = async () => {
    try {
      if (user?.memberWallets?.length) {
        if (user.country === COUNTRY.USA) {
          active.onTrue();
        } else {
          const { data } = await activateMember({});

          if (data?.activateMember.activationTx) {
            transactionOpen.onTrue();
            setTxHash(data.activateMember.activationTx);
          }
        }
      } else {
        toast.error('Please add a wallet first');
      }
    } catch (error) {
      toast.error((error as Error).message || 'Something went wrong, please try again');
    }
  };

  return (
    <>
      <Stack spacing={2}>
        {!loading && !user?.activated && (
          <Alert severity="error" variant="outlined">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
              <Typography variant="body2">
                Your account is not activate. To received daily reward, please activate your
                account.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Link variant="body2" sx={{ cursor: 'pointer' }} onClick={handleActivate}>
                  Activate account
                </Link>

                {activating && <Iconify icon="eos-icons:bubble-loading" color="success.main" />}
              </Stack>
            </Stack>
          </Alert>
        )}

        {!loading && Number(user?.totalTXCNotReceived) !== 0 && (
          <Alert
            severity="warning"
            variant="outlined"
          >{`You did not received ${Number(user?.totalTXCNotReceived) / 10 ** 8} TXC`}</Alert>
        )}
      </Stack>

      <ActivateModal open={active} />
      <TransactionModal open={transactionOpen} txHash={txHash} />
    </>
  );
}
