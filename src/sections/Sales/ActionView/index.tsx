import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/useBoolean';

import { MemberState } from 'src/__generated__/graphql';

import { Iconify } from 'src/components/Iconify';

import { useAuthContext } from 'src/auth/hooks';

import Packages from './Packages';
import { useOrderAvailablePoint } from '../useApollo';

export function ActionView() {
  const open = useBoolean();
  const { user } = useAuthContext();
  const { available } = useOrderAvailablePoint();

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="mingcute:add-line" />}
          href={paths.dashboard.txcRequest.new}
        >
          Buy TXC
        </Button>
        {user?.allowState !== MemberState.Ban && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={open.onTrue}
            disabled={available === 0}
          >
            Add Hash
          </Button>
        )}
      </Stack>

      <Packages open={open} available={available} />
    </>
  );
}
