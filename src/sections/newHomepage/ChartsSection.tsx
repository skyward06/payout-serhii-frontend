import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import Revenue from 'src/sections/Statistics/Chart/Revenue';
import HashPower from 'src/sections/Statistics/Chart/HashPower';
import MemberByCountry from 'src/sections/Statistics/Chart/MemberByCountry';

// ----------------------------------------------------------------------

export function ChartsSection() {
  return (
    <Box py={{ xs: 8, md: 10 }} bgcolor="background.default">
      <Container component={MotionViewport} sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={1} textAlign="center" mb={5}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" fontWeight={700}>
              Network Statistics
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
              Real-time insights into our growing network and community
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={3}>
          <Grid xs={12} md={12}>
            <HashPower />
          </Grid>
          <Grid xs={12} md={6}>
            <MemberByCountry />
          </Grid>
          <Grid xs={12} md={6}>
            <Revenue />
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Button
            component={RouterLink}
            href={paths.pages.statistics.root}
            variant="outlined"
            size="large"
            endIcon={<Iconify icon="eva:arrow-forward-fill" />}
          >
            View More Charts
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
