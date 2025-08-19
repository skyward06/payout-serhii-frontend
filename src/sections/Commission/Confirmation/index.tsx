import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { formatID } from 'src/utils/helper';

import { Iconify } from 'src/components/Iconify';

export function CommissionConfirmation() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');
  const method = searchParams.get('method');
  const status = searchParams.get('status');

  return (
    <Box px={4}>
      {status === 'success' ? (
        <>
          <Typography variant="h6">{formatID(id!, 'C')}</Typography>
          <Box textAlign="center" mt={3}>
            <Iconify icon="duo-icons:check-circle" color="primary.main" width={64} />
          </Box>
          <Box typography="h6" textAlign="center" mt={3}>
            Your commission payment method has been updated to{' '}
            <Typography variant="subtitle1" color="primary">
              {method}
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Box textAlign="center">
            <Iconify icon="uim:times-circle" color="error.main" width={64} />
          </Box>
          <Typography typography="h6" textAlign="center" mt={3}>
            Commission payment update failed. Please contact support team.
          </Typography>
        </>
      )}
    </Box>
  );
}
