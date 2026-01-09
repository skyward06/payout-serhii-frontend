import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/Iconify';

export function HelpView() {
  return (
    <>
      <Divider
        sx={{
          typography: 'overline',
          borderStyle: 'dashed',
        }}
      >
        Why use Plaid?
      </Divider>

      <Box display="grid" gap={2}>
        <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
          <Link href="https://plaid.com" target="_blank" component={RouterLink}>
            Plaid
          </Link>{' '}
          is a trustful fintech service that helps you link your bank accounts to third-party apps
          that require your account details. MineTXC uses Plaid to verify your account information
          only and could not get your banking credentials by Plaid policy.
        </Typography>

        <Stack direction="row" spacing={1}>
          <Iconify icon="lets-icons:info-fill" color="warning.main" width={16} mt={0.5} />

          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            After successful verification, MineTXC will send the ACH payment request via NACHA
            manually.
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
