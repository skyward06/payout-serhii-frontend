import { useRef, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';

import { FETCH_MEMBER_STATISTICS } from '../Reward/query';
import { FETCH_COMMISSION_QUERY } from '../Commission/query';

export function useFetchUserStatistics() {
  const [fetchUserStatistics, { loading, data }] = useLazyQuery(FETCH_MEMBER_STATISTICS);

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
    statistics: data?.memberStatistics.memberStatistics ?? [],
    fetchUserStatistics,
  };
}

export function useFetchUserWeeklyCommissions() {
  const [fetchUserCommissions, { loading, data }] = useLazyQuery(FETCH_COMMISSION_QUERY);

  return {
    loading,
    commissions: data?.weeklyCommissions.weeklyCommissions ?? [],
    total: data?.weeklyCommissions.total ?? 0,
    fetchUserCommissions,
  };
}
