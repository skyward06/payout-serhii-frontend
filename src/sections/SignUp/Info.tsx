import { useEffect } from 'react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useSearchParams } from 'src/routes/hooks';

import { toast } from 'src/components/SnackBar';
import DarkLogo from 'src/components/logo/dark-logo';

export default function Info() {
  const searchParams = useSearchParams();

  const paymentStatus = searchParams.get('paymentStatus');

  useEffect(() => {
    if (paymentStatus === 'success') {
      toast.success('Your payment attempt was successful');
    } else if (paymentStatus === 'failed') {
      toast.error('Your payment attempt failed');
    } else if (paymentStatus === 'canceled') {
      toast.error('Your payment attempt was canceled');
    }
  }, [paymentStatus]);

  return (
    <>
      <Stack direction="row" justifyContent="center">
        <DarkLogo />
      </Stack>

      <Stack spacing={1} sx={{ mt: 3, mb: 5, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Welcome to Texitcoin
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Thank you for signing up with Texitcoin! We are excited to have you on board.
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          To complete the registration process and activate your account, our team will contact you
          shortly to collect the necessary payment.
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          If you have any questions or need further assistance, feel free to reach out our support
          team:
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          Email:{' '}
          <Link
            variant="subtitle1"
            sx={{
              cursor: 'pointer',
            }}
            href="mailto:help@minetxc.com"
          >
            help@minetxc.com
          </Link>
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Thank you
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          The Texitcoin Team
        </Typography>
      </Stack>
    </>
  );
}
