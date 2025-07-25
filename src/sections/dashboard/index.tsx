import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { customizeFullName } from 'src/utils/helper';

import { useAuthContext } from 'src/auth/hooks';

import Chart from '../Statistics/Chart';
import Reward from '../Statistics/Reward';

export default function Dashboard() {
  const { user } = useAuthContext();
  return (
    <>
      <Typography variant="h4" sx={{ pb: 2 }}>
        {`Welcome, ${customizeFullName(user?.fullName)} !`}
      </Typography>

      <Grid container spacing={3}>
        <Chart />
        <Reward />
      </Grid>
    </>
  );
}
