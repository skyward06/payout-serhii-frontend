import type {
  IdInput,
  ExchangePublicTokenInput,
  OrderAchSubmitWithPlaidInput,
} from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import {
  SUBMIT_ORDER_ACH_PLAID,
  CREATE_PLAID_LINK_TOKEN,
  EXCHANGE_PLAID_PUBLIC_TOKEN,
} from './query';

export function useSubmitOrderACHWithPlaid() {
  const [submit, { loading }] = useMutation(SUBMIT_ORDER_ACH_PLAID);

  const submitOrderACHWithPlaid = useCallback(
    (data: OrderAchSubmitWithPlaidInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, submitOrderACHWithPlaid };
}

export function useCreatePlaidLinkToken() {
  const [submit, { loading }] = useMutation(CREATE_PLAID_LINK_TOKEN);

  const createPlaidLinkToken = useCallback(
    (data: IdInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, createPlaidLinkToken };
}

export function useExchangePlaidPublicToken() {
  const [submit, { loading }] = useMutation(EXCHANGE_PLAID_PUBLIC_TOKEN);

  const exchangePlaidPublicToken = useCallback(
    (data: ExchangePublicTokenInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, exchangePlaidPublicToken };
}
