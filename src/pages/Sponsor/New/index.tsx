import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { MemberState } from 'src/__generated__/graphql';

import SponsorNew from 'src/sections/Sponsor/Create';

import { useAuthContext } from 'src/auth/hooks';

export default function SponsorCreatePage() {
  const { user } = useAuthContext();

  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Sponsorships`}</title>
      </Helmet>

      {user?.allowState === MemberState.Ban ? (
        <Box textAlign="center" py={4}>
          <Typography variant="h5" color="text.secondary">
            You are not allowed to add miner
          </Typography>
        </Box>
      ) : (
        <SponsorNew />
      )}
    </>
  );
}
