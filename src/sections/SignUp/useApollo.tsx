import { useRef, useMemo } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';

import {
  SIGN_UP_MEMBER,
  FETCH_PROMOS_QUERY,
  FETCH_SIGNUP_PACKAGES,
  SEND_EMAIL_VERIFICATION_CODE,
} from './query';

export function useSignUp() {
  const [submitSignUp, { loading, data }] = useMutation(SIGN_UP_MEMBER);

  return { loading, result: data, submitSignUp };
}

export function useSendEmailVerificationCode() {
  const [sendVerificationCode, { loading, data }] = useMutation(SEND_EMAIL_VERIFICATION_CODE);

  return { loading, result: data, sendVerificationCode };
}

export function useFetchPromos() {
  const [fetchPromos, { loading, data, called }] = useLazyQuery(FETCH_PROMOS_QUERY);

  const rowCountRef = useRef(data?.promos.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.promos.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    called,
    loading,
    rowCount,
    promos: data?.promos.promotions ?? [],
    fetchPromos,
  };
}

export function useFetchSignUpPackages() {
  const { loading, data, error } = useQuery(FETCH_SIGNUP_PACKAGES);

  return { loading, packages: data?.signUpPackages ?? [], error };
}
