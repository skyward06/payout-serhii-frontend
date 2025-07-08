import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';

export function HelpView() {
  return (
    <>
      <Divider
        sx={{
          my: 3,
          typography: 'overline',
          borderStyle: 'dashed',
        }}
      >
        Useful tips to know
      </Divider>

      <Box display="grid" gap={2}>
        <Typography variant="subtitle2">Important reminder:</Typography>

        <Stack direction="row" spacing={2}>
          <Iconify icon="lets-icons:check-fill" color="primary.main" />
          <Typography variant="body2">Pay attention to transaction fees</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="lets-icons:check-fill" color="primary.main" />
          <Typography variant="body2">
            Always keep the Order ID handy, located at the top left
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="lets-icons:check-fill" color="primary.main" />
          <Typography variant="body2">
            Ensure you are making payments to the correct token and chain
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="lets-icons:check-fill" color="primary.main" />
          <Typography variant="body2">
            You can make multiple payments, but be sure they are directed to the correct token and
            chain
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="lets-icons:check-fill" color="primary.main" />
          <Typography variant="body2">
            If your order expires before payment is completed, please contact us at{' '}
            <a href="mailto:help@minetxc.com">help@minetxc.com</a> with your Order ID
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="lets-icons:check-fill" color="primary.main" />
          <Typography variant="body2">
            If you believe the order might expire before the transaction is confirmed, we recommend
            canceling and recreating the order
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="lets-icons:check-fill" color="primary.main" />
          <Typography variant="body2">
            TXC payments may take some time to confirm. Don’t worry, your order will be completed
            even if you close the browser
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="lets-icons:check-fill" color="primary.main" />
          <Typography variant="body2">
            Please be cautious when clicking the cancel button, as it will close your order
          </Typography>
        </Stack>
      </Box>

      <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

      <Box display="grid" gap={2}>
        <Typography variant="subtitle2">
          We will not be able to proceed with the transaction on the initial terms if you:
        </Typography>

        <Stack direction="row" spacing={2}>
          <Iconify icon="stash:times-circle-solid" color="warning.main" />
          <Typography variant="body2">
            If the payment is below the required amount, the order will not be processed
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
