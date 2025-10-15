import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { formatDate } from 'src/utils/format-time';

import { useAuthContext } from 'src/auth/hooks';

import { InfoItem } from './InfoItem';

export function BasicInfo() {
  const { user } = useAuthContext();

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" mb={3}>
        Personal Information
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:user-bold-duotone"
            label="Sponsor"
            value={user?.sponsor?.fullName}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem icon="solar:letter-bold-duotone" label="Email" value={user?.email} />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem icon="solar:phone-bold-duotone" label="Mobile" value={user?.mobile} />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:calendar-bold-duotone"
            label="Joined At"
            value={user?.createdAt ? formatDate(user.createdAt) : ''}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
