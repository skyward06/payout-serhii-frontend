import type { CreateAchInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_ACH } from './query';

export function useCreateACH() {
  const [submit, { loading }] = useMutation(CREATE_ACH);

  const createACH = useCallback(
    (data: CreateAchInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, createACH };
}
