import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/Iconify';

import { useAuthContext } from 'src/auth/hooks';

export function PaymentInfo() {
  const theme = useTheme();
  const { user } = useAuthContext();
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" mb={3}>
        Payment Methods
      </Typography>

      <Grid container spacing={2}>
        {user?.memberWallets?.map((item, index) => (
          <Grid xs={12} key={index}>
            <Box
              p={2}
              borderRadius={1.5}
              border={`1px solid ${alpha(theme.palette.grey[500], 0.12)}`}
              bgcolor={alpha(theme.palette.grey[500], 0.04)}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1.5} flex={1}>
                  <Box
                    width={40}
                    height={40}
                    display="flex"
                    borderRadius={1}
                    alignItems="center"
                    justifyContent="center"
                    bgcolor={alpha(theme.palette.primary.main, 0.08)}
                  >
                    <Iconify
                      icon="solar:wallet-money-bold-duotone"
                      width={22}
                      sx={{ color: 'primary.main' }}
                    />
                  </Box>
                  <Stack spacing={0.5} sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="subtitle2">{item?.payout?.method}</Typography>
                    <Typography
                      variant="caption"
                      overflow="hidden"
                      color="text.secondary"
                      fontFamily="monospace"
                      textOverflow="ellipsis"
                    >
                      {item?.address}
                    </Typography>
                  </Stack>
                </Stack>
                <Chip label={`${item.percent / 100}%`} size="small" color="primary" />
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
