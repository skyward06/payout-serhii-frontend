import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
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
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3} mb={2}>
        <Typography variant="h4">{`Welcome, ${customizeFullName(user?.fullName)} !`}</Typography>
        {!user?.activated && (
          <Alert severity="error" variant="outlined">
            {`Activate your account. Missed reward is ${Number(user?.totalTXCNotReceived) / 10 ** 8} TXC`}
          </Alert>
        )}
      </Stack>

      <Grid container spacing={3}>
        <Chart />
        <Reward />
      </Grid>
    </>
  );
}
