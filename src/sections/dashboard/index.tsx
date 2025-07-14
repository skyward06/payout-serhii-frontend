import Typography from '@mui/material/Typography';

import { customizeFullName } from 'src/utils/helper';

import { DashboardContent } from 'src/layouts/dashboard';

import { useAuthContext } from 'src/auth/hooks';

import Chart from '../Statistics/Chart';
import Reward from '../Statistics/Reward';

export default function Dashboard() {
  const { user } = useAuthContext();
  return (
    <DashboardContent>
      <Typography variant="h4" sx={{ pb: 2 }}>
        {`Welcome, ${customizeFullName(user?.fullName)} !`}
      </Typography>

      <Chart />
      <Reward />
    </DashboardContent>
  );
}
