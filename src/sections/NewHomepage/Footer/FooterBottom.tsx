import { m } from 'framer-motion';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { varFade } from 'src/components/animate';

export function FooterBottom() {
  return (
    <m.div variants={varFade().inUp}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body2" sx={{ color: 'grey.600' }}>
          © 2025 TEXITcoin. All Rights Reserved.
        </Typography>

        <Stack direction="row" spacing={3}>
          <Link
            href="https://texitcoin.org/"
            target="_blank"
            variant="body2"
            sx={{
              color: 'grey.600',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href={paths.pages.refundPolicy.root}
            variant="body2"
            sx={{
              color: 'grey.600',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Refund Policy
          </Link>
          <Link
            href="https://texitcoin.org/"
            target="_blank"
            variant="body2"
            sx={{
              color: 'grey.600',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Terms of Service
          </Link>
        </Stack>
      </Stack>
    </m.div>
  );
}
