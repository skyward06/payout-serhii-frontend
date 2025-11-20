import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { BlogArticles } from './BlogArticles';
import { SecondChance } from './SecondChance';

export function HeroSection() {
  return (
    <Box pt={{ xs: 6, md: 8 }} bgcolor="background.default">
      <Container>
        <Grid container spacing={4} alignItems="stretch">
          <Grid xs={12} md={8}>
            <SecondChance />
          </Grid>
          <Grid xs={12} md={4}>
            <BlogArticles />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
