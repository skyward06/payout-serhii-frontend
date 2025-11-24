import Container from '@mui/material/Container';

import Rewards from './Rewards';
import { SignUpView } from '../SignUp';
import Description from './Description';
import { Packages } from '../NewHomepage/Packages';

export function RapidRewards() {
  return (
    <>
      <Rewards />

      <Description />

      <Packages />

      <Container>
        <SignUpView />
      </Container>
    </>
  );
}
