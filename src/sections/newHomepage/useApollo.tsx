import { useQuery } from '@apollo/client';

import { FETCH_SEAT_FILLED, FETCH_PURCHASED_HASHRATE } from './query';

export function useFetchSeatFilled() {
  const { loading, data, error } = useQuery(FETCH_SEAT_FILLED);

  return { loading, seatFilled: data?.seatFilled ?? 0, error };
}

export function useFetchPurchasedHashRate() {
  const { loading, data, error } = useQuery(FETCH_PURCHASED_HASHRATE);

  return { loading, hashrate: data?.purchasedHashRate ?? 0, error };
}
