import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { useConfirmPeerPayment } from './useApollo';

export function PeerConfirmation() {
  const searchParams = new URLSearchParams(window.location.search);

  const memberId = searchParams.get('id');
  const response = searchParams.get('res');
  const peerCode = searchParams.get('peerCode');

  const { confirmPeerPayment } = useConfirmPeerPayment();

  useEffect(() => {
    if (memberId && peerCode && response === 'yes') {
      (async () => {
        try {
          const { data } = await confirmPeerPayment({ memberId, peerCode });

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
  }, [memberId, peerCode, response, confirmPeerPayment]);

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
