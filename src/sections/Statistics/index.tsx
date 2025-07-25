import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import Chart from './Chart';
import Reward from './Reward';
import Summary from './Summary';

export default function StatisticsSection() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Summary />
        <Chart />
        <Reward />
      </Grid>
    </Container>
  );
}
