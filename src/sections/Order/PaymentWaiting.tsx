import { useLocation } from 'react-router';

import { PaymentType } from 'src/__generated__/graphql';
import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

import { ACHForm } from '../ACH';
import { CryptoWaiting } from './CryptoWaiting';

export default function PaymentWaiting() {
  const { state } = useLocation();

  const { order: current } = useOrderContext();

  if (current.paymentType === PaymentType.Ach || state?.isHashAch) {
    return <ACHForm amount={Number(current.requiredBalance) / 100} />;
  }

  return <CryptoWaiting current={current} />;
}
