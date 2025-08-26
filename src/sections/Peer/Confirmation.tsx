import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { useConfirmPeerPayment } from './useApollo';

export function PeerConfirmation() {
  const searchParams = new URLSearchParams(window.location.search);

  const id = searchParams.get('id');
  const response = searchParams.get('response');

  const { confirmPeerPayment } = useConfirmPeerPayment();

  useEffect(() => {
    if (id && response === 'yes') {
      (async () => {
        try {
          const { data } = await confirmPeerPayment(id);

          if (data?.confirmPeerPayment.result === 'success') {
            toast.success('Peer payment confirmed');
          } else {
            toast.error(data?.confirmPeerPayment.message);
          }
        } catch (err: any) {
          console.log(err?.message);
        }
      })();
    }
  }, [id, response, confirmPeerPayment]);

  return (
    <Box px={4}>
      {response === 'yes' ? (
        <>
          <Box textAlign="center" mt={3}>
            <Iconify icon="duo-icons:check-circle" color="primary.main" width={64} />
          </Box>
          <Box typography="h6" textAlign="center" mt={3}>
            Your peer payment has been confirmed.
          </Box>
        </>
      ) : (
        <>
          <Box textAlign="center">
            <Iconify icon="uim:times-circle" color="error.main" width={64} />
          </Box>
          <Typography typography="h6" textAlign="center" mt={3}>
            Peer payment confirmation failed. Please contact support team.
          </Typography>
        </>
      )}
    </Box>
  );
}
