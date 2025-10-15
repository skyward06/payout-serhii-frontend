import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useAuthContext } from 'src/auth/hooks';

import { InfoItem } from './InfoItem';

export function TeamInfo() {
  const { user } = useAuthContext();
  const [children, setChildren] = useState<any>();

  useEffect(() => {
    setChildren(
      user?.placementChildren?.reduce(
        (prev, save) => ({ ...prev, [save?.placementPosition ?? '']: save?.fullName }),
        {}
      )
    );
  }, [user]);

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" mb={3}>
        Team Information
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:users-group-rounded-bold-duotone"
            label="Group"
            value={user?.groupSetting?.name}
            color="secondary"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:chart-bold-duotone"
            label="Team Strategy"
            value={user?.teamStrategy}
            color="secondary"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:star-bold-duotone"
            label="Starting Points"
            value={`L${user?.commission?.begL ?? 0}, R${user?.commission?.begR ?? 0}`}
            color="secondary"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:star-shine-bold-duotone"
            label="New Points"
            value={`L${user?.commission?.newL ?? 0}, R${user?.commission?.newR ?? 0}`}
            color="secondary"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:user-check-rounded-bold-duotone"
            label="Placement Parent"
            value={user?.placementParent?.fullName}
            color="secondary"
          />
        </Grid>
        <Grid xs={12} md={3}>
          <InfoItem
            icon="solar:arrow-left-bold-duotone"
            label="Miner Left"
            value={children?.LEFT}
            color="secondary"
          />
        </Grid>
        <Grid xs={12} md={3}>
          <InfoItem
            icon="solar:arrow-right-bold-duotone"
            label="Miner Right"
            value={children?.RIGHT}
            color="secondary"
          />
        </Grid>
      </Grid>
    </Card>
  );
}
