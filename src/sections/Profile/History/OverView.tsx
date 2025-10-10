import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { fNumber } from 'src/utils/formatNumber';

import { CASH_POTENTIAL_URL } from 'src/consts';

import { Iconify } from 'src/components/Iconify';

import { useAuthContext } from 'src/auth/hooks';

export default function OverView() {
  const { user } = useAuthContext();

  return (
    <Card sx={{ py: 3, textAlign: 'center', typography: 'h4' }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack width={0.8}>
          {fNumber(user?.currentHashPower ?? 0)}
          <Box component="span" color="text.secondary" typography="body2">
            Hash Power
          </Box>
        </Stack>

        <Stack width={0.8}>
          {fNumber(user?.cashCommissionPotential ?? 0)}
          <Stack direction="row" justifyContent="space-around" alignItems="center">
            <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
              Cash Potential
            </Box>
            {user?.isTexitRanger && (
              <Iconify
                icon="emojione:star"
                cursor="pointer"
                sx={{ '&:hover': { transform: 'scale(1.5)' } }}
                color="#000000"
                onClick={() => window.open(CASH_POTENTIAL_URL, '_blank')}
              />
            )}
          </Stack>
        </Stack>

        <Stack width={1}>
          {fNumber((Number(user?.totalTXCShared) ?? 0) / 10 ** 8)}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            Total TXC Reward
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}
