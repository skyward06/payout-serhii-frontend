import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/useBoolean';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { LoadingScreen } from 'src/components/loading-screen';

import { useConfirmEmail } from './useApollo';

export function ConfirmAddress() {
  const searchParams = new URLSearchParams(window.location.search);

  const id = searchParams.get('token');
  const confirm = searchParams.get('confirm');

  const sent = useBoolean();
  const result = useBoolean();

  const { confirmEmail } = useConfirmEmail();

  useEffect(() => {
    if (id && confirm) {
      (async () => {
        try {
          const { data } = await confirmEmail({ id, correct: confirm === 'yes' });

          if (data?.confirmEmail5071.result === 'success') {
            sent.onTrue();

            toast.success(
              sent.value ? 'Your commission is ready to pay' : 'Your commission was frozen'
            );
          }
        } catch (err: any) {
          toast.error(err.message);
        }
      })();
    }
  }, [id, confirm, sent, confirmEmail]);

  return (
    <Box px={4}>
      {sent.value ? (
        result.value ? (
          <Box mt={3}>
            <Box textAlign="center">
              <Iconify icon="duo-icons:check-circle" color="primary.main" width={64} />
            </Box>
            <Typography variant="h6" textAlign="center">
              Your address has been confirmed successfully.
            </Typography>
          </Box>
        ) : (
          <Box mt={3}>
            <Box textAlign="center">
              <Iconify icon="uim:times-circle" color="error.main" width={64} />
            </Box>
            <Typography variant="h6" textAlign="center">
              Your address confirmation failed. Please contact support team.
            </Typography>
          </Box>
        )
      ) : (
        <LoadingScreen />
      )}
    </Box>
  );
}
