import { useAuthContext } from 'src/auth/hooks';

import { Header } from './Header';
import { TeamInfo } from './Team';
import { BasicInfo } from './Basic';
import { AddressInfo } from './Address';
import { AccountInfo } from './Account';
import { PaymentInfo } from './Payment';

export default function Personal() {
  const { user } = useAuthContext();

  return (
    <>
      <Header />

      <BasicInfo />

      <AccountInfo />

      <AddressInfo />

      <TeamInfo />

      {user?.memberWallets && user.memberWallets.length > 0 && <PaymentInfo />}
    </>
  );
}
