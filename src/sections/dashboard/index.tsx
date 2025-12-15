import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { customizeFullName } from 'src/utils/helper';

import { useAuthContext } from 'src/auth/hooks';

import {
  QuickActions,
  TeamOverview,
  AccountStatus,
  MiningSummary,
  PointsBalance,
  RewardHistory,
  CommissionHistory,
} from './components';

export default function Dashboard() {
  const { user, loading } = useAuthContext();

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3} mb={3}>
        <Typography variant="h4">{`Welcome back, ${customizeFullName(user?.fullName)} !`}</Typography>
        {!user?.activated && (user?.totalTXCNotReceived ?? 0) > 0 && (
          <Alert severity="error" variant="outlined">
            {`Please activate your cold storage coin to receive ${Number(user?.totalTXCNotReceived ?? 0) / 10 ** 8} TXC`}
          </Alert>
        )}
      </Stack>

      <Grid container spacing={3}>
        {/* Mining Summary - Full Width */}
        <Grid xs={12}>
          <MiningSummary user={user} loading={loading} />
        </Grid>

        {/* Quick Actions */}
        <Grid xs={12}>
          <QuickActions />
        </Grid>

        {/* Team Overview */}
        <Grid xs={12} md={4}>
          <TeamOverview user={user} loading={loading} />
        </Grid>

        {/* Points Balance */}
        <Grid xs={12} md={4}>
          <PointsBalance user={user} loading={loading} />
        </Grid>

        {/* Account Status */}
        <Grid xs={12} md={4}>
          <AccountStatus user={user} />
        </Grid>

        {/* Reward History */}
        <Grid xs={12} md={6}>
          <RewardHistory memberId={user?.id} />
        </Grid>

        {/* Commission History */}
        <Grid xs={12} md={6}>
          <CommissionHistory memberId={user?.id} />
        </Grid>
      </Grid>
    </>
  );
}
