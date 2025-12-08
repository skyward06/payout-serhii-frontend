import { useQuery, useLazyQuery } from '@apollo/client';

import { FETCH_PAYMENT_QUERY, ENROLLMENT_PAYMENT_METHODS } from './query';

export function useFetchPayments() {
  const { loading, data } = useQuery(FETCH_PAYMENT_QUERY);

  return { loading, payments: data?.paymentMethods ?? [] };
}

export function useFetchPayment() {
  const [fetchPayment, { loading, data }] = useLazyQuery(FETCH_PAYMENT_QUERY);

  return { loading, payment: data?.paymentMethods ?? [], fetchPayment };
}

export function useFetchEnrollmentPaymentMethods() {
  const { loading, data, error } = useQuery(ENROLLMENT_PAYMENT_METHODS);

  return { loading, payments: data?.enrollmentPaymentMethods ?? [], error };
}
