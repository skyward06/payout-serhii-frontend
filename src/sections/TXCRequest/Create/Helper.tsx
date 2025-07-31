import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/Iconify';

export function Helper() {
  return (
    <Box color="text.secondary">
      <Divider sx={{ borderStyle: 'dashed', my: 3, typography: 'overline' }}>
        <Typography variant="subtitle1">Useful tips to know</Typography>
      </Divider>

      <Box display="grid" gap={1} sx={{ width: { md: 500, sm: 300 }, mx: 'auto' }}>
        <Stack direction="row" alignItems="start" spacing={2}>
          <Iconify icon="ion:information-circle-outline" sx={{ mt: 0.3 }} color="primary.main" />
          <Typography variant="body2">
            Minimum deposit of <strong>$30</strong> is required.
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="start" spacing={2}>
          <Iconify icon="ion:information-circle-outline" sx={{ mt: 0.3 }} color="primary.main" />
          <Typography variant="body2">
            Final amount you receive is determined by the conversion rate at order completion, not
            at submission.
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="start" spacing={2}>
          <Iconify icon="ion:information-circle-outline" sx={{ mt: 0.3 }} color="primary.main" />
          <Typography variant="body2">
            Click the reload button to see the <strong>current TXC</strong> price before submitting.
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="start" spacing={2}>
          <Iconify icon="ion:information-circle-outline" sx={{ mt: 0.3 }} color="primary.main" />
          <Typography variant="body2">
            If you have any issues, please contact us at{' '}
            <Link component={RouterLink} href="mailto:help@minetxc.com">
              help@minetxc.com
            </Link>
            .
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
