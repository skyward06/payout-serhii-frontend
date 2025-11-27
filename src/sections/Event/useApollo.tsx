import { useLazyQuery } from '@apollo/client';

import { FETCH_EVENTS } from './query';

export function useFetchEvents() {
  const [fetchEvents, { loading, data, called }] = useLazyQuery(FETCH_EVENTS);

  return { loading, called, events: data?.events ?? [], fetchEvents };
}
