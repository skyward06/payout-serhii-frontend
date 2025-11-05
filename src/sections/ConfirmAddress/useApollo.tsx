import type { SuspendedCommissionConfirmInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { CONFIRM_EMAIl } from './query';

export function useConfirmEmail() {
  const [submit, { loading, error }] = useMutation(CONFIRM_EMAIl);

  const confirmEmail = useCallback(
    (data: SuspendedCommissionConfirmInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, error, confirmEmail };
}
