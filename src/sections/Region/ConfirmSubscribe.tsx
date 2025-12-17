import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';

export function ConfirmSubscribe() {
  const searchParams = new URLSearchParams(window.location.search);

  const status = searchParams.get('status');
  const region = searchParams.get('region');

  return (
    <Box mt={3}>
      {status === 'success' ? (
        <Stack alignItems="center" textAlign="center" mx="auto" maxWidth={600} spacing={3}>
          <Box>
            <Iconify icon="duo-icons:check-circle" color="success.main" width={80} />
          </Box>
          <Stack spacing={1}>
            <Typography variant="h5" fontWeight={600}>
              Unsubscription Confirmed
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You have successfully unsubscribed from email communications for{' '}
              {region || 'this region'}.
            </Typography>
          </Stack>

          <Stack spacing={1.5} width="100%" pt={2}>
            <Typography variant="body2" color="text.secondary">
              To manage your email preferences or subscribe to other regions, please visit:
            </Typography>
            <Stack direction="row" justifyContent="center">
              <Link
                href={`${CONFIG.SITE_PATH}/email-region`}
                underline="hover"
                display="inline-flex"
                alignItems="center"
                fontWeight={500}
                gap={0.5}
              >
                {`${CONFIG.SITE_PATH}/email-region`}
                <Iconify icon="eva:external-link-fill" width={16} />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Stack spacing={3} alignItems="center" textAlign="center" mx="auto" maxWidth={600}>
          <Box>
            <Iconify icon="uim:times-circle" color="error.main" width={80} />
          </Box>
          <Stack spacing={1}>
            <Typography variant="h5" fontWeight={600}>
              Unsubscription Failed
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We encountered an issue processing your unsubscription request. Please try again or
              contact support for assistance.
            </Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
