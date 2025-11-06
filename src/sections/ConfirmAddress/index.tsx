import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { LoadingScreen } from 'src/components/loading-screen';

import { useConfirmEmail } from './useApollo';

export function ConfirmAddress() {
  const searchParams = new URLSearchParams(window.location.search);

  const id = searchParams.get('token');
  const confirm = searchParams.get('confirm');
  const [sent, setSent] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);

  const { confirmEmail } = useConfirmEmail();

  useEffect(() => {
    if (id && confirm) {
      (async () => {
        try {
          const { data } = await confirmEmail({ id, correct: confirm === 'yes' });

          if (data?.confirmEmail5071.result === 'success') {
            setSent(true);
            setResult(true);
          } else {
            setResult(false);
            toast.error(data?.confirmEmail5071.message);
          }
        } catch (err: any) {
          setSent(true);
          toast.error(err.message);
        }
      })();
    }
  }, [id, confirm, confirmEmail]);

  return (
    <Box px={4}>
      {sent ? (
        result ? (
          confirm === 'yes' ? (
            <Box mt={3}>
              <Box textAlign="center">
                <Iconify icon="duo-icons:check-circle" color="primary.main" width={64} />
              </Box>
              <Typography variant="h6" textAlign="center">
                Your commission is ready to pay.
              </Typography>
            </Box>
          ) : (
            <Box mt={3}>
              <Box textAlign="center">
                <Iconify icon="uim:times-circle" color="error.main" width={64} />
              </Box>
              <Typography variant="h6" textAlign="center">
                Your commission was frozen. Please contact support team.
              </Typography>
            </Box>
          )
        ) : (
          <Box mt={3}>
            <Box textAlign="center">
              <Iconify icon="uim:times-circle" color="error.main" width={64} />
            </Box>
            <Typography variant="h6" textAlign="center">
              Your action failed.
            </Typography>
          </Box>
        )
      ) : (
        <LoadingScreen />
      )}
    </Box>
  );
}
