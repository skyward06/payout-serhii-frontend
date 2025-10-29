import Grid from '@mui/material/Unstable_Grid2';

import Revenue from './Revenue';
import HashRate from './HashRate';
import TXCShared from './TXCShared';
import HashPower from './HashPower';
import TotalMiner from './TotalMiner';
import Commission from './Commission';
import MemberCount from './MemberCount';
import MemberReward from './MemberReward';
import MemberByCountry from './MemberByCountry';

export default function Chart() {
  return (
    <>
      <Grid xs={12} md={6}>
        <HashRate />
      </Grid>
      <Grid xs={12} md={6}>
        <HashPower />
      </Grid>
      <Grid xs={12} md={6}>
        <TXCShared />
      </Grid>
      <Grid xs={12} md={6}>
        <Commission />
      </Grid>
      <Grid xs={12} md={6}>
        <MemberReward />
      </Grid>
      <Grid xs={12} md={6}>
        <TotalMiner />
      </Grid>
      <Grid xs={12} md={4}>
        <Revenue />
      </Grid>
      <Grid xs={12} md={4}>
        <MemberCount />
      </Grid>
      <Grid xs={12} md={4}>
        <MemberByCountry />
      </Grid>
    </>
  );
}
