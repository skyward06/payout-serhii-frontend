import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { LoadingScreen } from 'src/components/loading-screen';

import { useConfirmPeerPayment } from './useApollo';

export function PeerConfirmation() {
  const searchParams = new URLSearchParams(window.location.search);

  const memberId = searchParams.get('id');
  const response = searchParams.get('res');
  const peerCode = searchParams.get('peerCode');
  const verifier = searchParams.get('verifier');
  const [isSent, setIsSent] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);

  const { confirmPeerPayment } = useConfirmPeerPayment();

  useEffect(() => {
    if (memberId && peerCode && verifier) {
      (async () => {
        try {
          const { data } = await confirmPeerPayment({
            memberId,
            peerCode,
            verifier,
            confirm: response === 'yes',
          });

          if (data?.confirmPeerPayment.result === 'success') {
            setIsSent(true);
            toast.success('Peer payment confirmed');
            setResult(true);
          } else {
            setIsSent(true);
            toast.error(data?.confirmPeerPayment.message);
            setResult(false);
          }
        } catch (err: any) {
          console.log(err?.message);
        }
      })();
    }
  }, [memberId, peerCode, response, verifier, confirmPeerPayment]);

  return (
    <Box px={4}>
      {isSent ? (
        result ? (
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
        )
      ) : (
        <LoadingScreen />
      )}
    </Box>
  );
}
