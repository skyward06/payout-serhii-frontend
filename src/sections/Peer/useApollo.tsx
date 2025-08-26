import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { CONFIRMATION_PEER_PAYMENT } from './query';

export function useConfirmPeerPayment() {
  const [submit, { loading, error }] = useMutation(CONFIRMATION_PEER_PAYMENT);

  const confirmPeerPayment = useCallback(
    (confirmPeerPaymentId: string) => submit({ variables: { confirmPeerPaymentId } }),
    [submit]
  );

  return { loading, error, confirmPeerPayment };
}
