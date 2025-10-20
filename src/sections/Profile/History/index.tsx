import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Table from './Table';
import Reward from './Reward';
import OverView from './OverView';
import Personal from './Personal';

export default function HistoryView() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={7}>
        <Box display="grid" gap={2}>
          <Reward />
          <Table />
        </Box>
      </Grid>
      <Grid xs={12} md={5}>
        <Box display="grid" gap={2}>
          <OverView />
          <Personal />
        </Box>
      </Grid>
    </Grid>
  );
}
