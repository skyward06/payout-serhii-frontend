import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';
import DarkLogo from 'src/components/logo/dark-logo';

// ----------------------------------------------------------------------

export function FooterLogo() {
  return (
    <m.div variants={varFade().inUp}>
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <DarkLogo sx={{ mb: 3 }} />
        <Typography
          variant="body2"
          sx={{
            color: 'grey.500',
            maxWidth: 280,
            lineHeight: 1.8,
            mx: { xs: 'auto', md: 0 },
          }}
        >
          Built in Texas, by Texans. TEXITcoin is a fast, Layer 1 digital currency designed for
          generations of honest trade.
        </Typography>
      </Box>
    </m.div>
  );
}
