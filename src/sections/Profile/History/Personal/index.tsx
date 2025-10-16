import Stack from '@mui/material/Stack';

import { useAuthContext } from 'src/auth/hooks';

import { Header } from './Header';
import { TeamInfo } from './Team';
import { BasicInfo } from './Basic';
import { AddressInfo } from './Address';
import { AccountInfo } from './Account';
import { PaymentInfo } from './Payment';
import { SettingsInfo } from './Settings';

export default function Personal() {
  const { user } = useAuthContext();

  return (
    <Stack spacing={2}>
      <Header />

      <BasicInfo />

      <AccountInfo />

      <AddressInfo />

      <TeamInfo />

      {user?.memberWallets && user.memberWallets.length > 0 && <PaymentInfo />}

      <SettingsInfo />
    </Stack>
  );
}
