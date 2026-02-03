import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { MotionViewport } from 'src/components/animate';

import { FooterLogo } from './FooterLogo';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterBottom } from './FooterBottom';

// ----------------------------------------------------------------------

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.96),
        pt: 10,
        pb: 5,
      }}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {/* Logo and Social Section */}
          <Grid xs={12} md={4}>
            <FooterLogo />
            <FooterSocial />
          </Grid>

          {/* Links Sections */}
          <Grid xs={12} md={8}>
            <FooterLinks />
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: 'grey.800' }} />

        {/* Bottom Section */}
        <FooterBottom />
      </Container>
    </Box>
  );
}
