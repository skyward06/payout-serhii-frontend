import { useSuspenseQuery } from '@apollo/client';

import { FETCH_MEMBER_BY_ID } from './query';

export function useFetchMemberById(id: string) {
  const { data } = useSuspenseQuery(FETCH_MEMBER_BY_ID, { variables: { data: { id } } });

  return { member: data?.memberById };
}
