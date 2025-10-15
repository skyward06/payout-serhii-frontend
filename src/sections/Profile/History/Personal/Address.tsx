import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useAuthContext } from 'src/auth/hooks';

import { InfoItem } from './InfoItem';

export function AddressInfo() {
  const { user } = useAuthContext();

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" mb={3}>
        Address Details
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <InfoItem
            icon="solar:map-point-bold-duotone"
            label="Primary Address"
            value={user?.primaryAddress}
            color="info"
          />
        </Grid>
        {user?.secondaryAddress && (
          <Grid xs={12}>
            <InfoItem
              icon="solar:map-point-bold-duotone"
              label="Secondary Address"
              value={user?.secondaryAddress}
              color="info"
            />
          </Grid>
        )}
        <Grid xs={12} sm={6} md={3}>
          <InfoItem icon="solar:city-bold-duotone" label="City" value={user?.city} color="info" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <InfoItem
            icon="solar:mailbox-bold-duotone"
            label="ZIP Code"
            value={user?.zipCode}
            color="info"
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <InfoItem
            icon="solar:flag-bold-duotone"
            label="Country"
            value={user?.country}
            color="info"
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <InfoItem icon="solar:map-bold-duotone" label="State" value={user?.state} color="info" />
        </Grid>
      </Grid>
    </Card>
  );
}
