import { useQuery } from '@apollo/client';

import { FETCH_SEAT_FILLED, CURRENT_NETWORK_HASHRATE } from './query';

export function useFetchSeatFilled() {
  const { loading, data, error } = useQuery(FETCH_SEAT_FILLED);

  return { loading, seatFilled: data?.seatFilled ?? 0, error };
}

export function useFetchCurrentHashRate() {
  const { loading, data, error } = useQuery(CURRENT_NETWORK_HASHRATE);

  return { loading, hashrate: data?.currentNetworkHashRate ?? 0, error };
}
