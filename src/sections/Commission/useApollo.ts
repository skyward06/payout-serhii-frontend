import { useRef, useMemo } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { parseFilterModel } from 'src/utils/parseFilter';

import { FETCH_COMMISSION_QUERY, FETCH_COMMISSION_STATS_QUERY } from './query';

export function useFetchCommissions() {
  const [{ page = '1,50', sort = 'ID', filter }] = useQueryString();
  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { loading, data } = useQuery(FETCH_COMMISSION_QUERY, {
    variables: { filter: graphQueryFilter, page, sort },
  });

  const rowCountRef = useRef(data?.weeklyCommissions.total ?? 0);

  const rowCount: any = useMemo(() => {
    const newTotal = data?.weeklyCommissions.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    weeklyCommissions: data?.weeklyCommissions.weeklyCommissions ?? [],
  };
}

export function useFetchCommissionStats() {
  const [fetchCommissionStats, { data }] = useLazyQuery(FETCH_COMMISSION_STATS_QUERY);

  return { data, fetchCommissionStats };
}
