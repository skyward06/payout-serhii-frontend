import { useRef, useMemo } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';

import { REWARD_BY_WALLETS, FETCH_MEMBER_STATISTICS_QUERY } from './query';

export function useFetchReward({ from, to }: { from: string; to: string }) {
  const { loading, data } = useQuery(REWARD_BY_WALLETS, {
    variables: { from, to },
  });

  return { loading, reward: data?.rewardsByWallets.rewards ?? [] };
}

export function useFetchMemberStatistics() {
  const [fetchMemberStatistics, { loading, data }] = useLazyQuery(FETCH_MEMBER_STATISTICS_QUERY);

  const rowCountRef = useRef(data?.memberStatistics.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.memberStatistics.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    memberStatistics: data?.memberStatistics.memberStatistics ?? [],
    fetchMemberStatistics,
  };
}
