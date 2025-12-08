import type { OrderAchSubmitInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { SUBMIT_ORDER_ACH } from './query';

export function useSubmitOrderACH() {
  const [submit, { loading }] = useMutation(SUBMIT_ORDER_ACH);

  const submitOrderACH = useCallback(
    (data: OrderAchSubmitInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, submitOrderACH };
}
