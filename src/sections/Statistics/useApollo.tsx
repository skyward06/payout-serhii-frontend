import type { PeriodStateType } from 'src/__generated__/graphql';

import { useQuery, useLazyQuery } from '@apollo/client';

import {
  GENERAL_QUERY,
  FETCH_TXC_SHARES,
  FETCH_TOP_EARNERS,
  FETCH_MEMBER_COUNT,
  FETCH_LATEST_REWARD,
  FETCH_MEMBER_REWARD,
  FETCH_REVENUE_QUERY,
  FETCH_TOP_RECRUITERS,
  FETCH_STATISTICS_QUERY,
  FETCH_TOTAL_MINER_QUERY,
  FETCH_BLOCKS_DATA_QUERY,
  FETCH_MEMBERS_BY_COUNTRY,
  FETCH_COMMISSION_BY_PERIOD,
} from './query';

export function useFetchGeneral() {
  const [fetchGeneral, { loading, data }] = useLazyQuery(GENERAL_QUERY);

  return { loading, data, fetchGeneral };
}

export function useFetchStatistics() {
  const [fetchStatistics, { loading, data }] = useLazyQuery(FETCH_STATISTICS_QUERY);

  return { loading, statistics: data?.statistics.statistics ?? [], fetchStatistics };
}

export function useFetchBlocks(type: PeriodStateType) {
  const { loading, data } = useQuery(FETCH_BLOCKS_DATA_QUERY, { variables: { data: { type } } });

  return { loading, blocks: data?.blocksData ?? [] };
}

export function useFetchMemberCounts(type: PeriodStateType) {
  const { loading, data } = useQuery(FETCH_MEMBER_COUNT, { variables: { data: { type } } });

  return { loading, memberCount: data?.newMemberCounts ?? [] };
}

export function useFetchTotalMiner(type: PeriodStateType) {
  const { loading, data } = useQuery(FETCH_TOTAL_MINER_QUERY, { variables: { data: { type } } });

  return { loading, totalMiner: data?.totalMemberCounts ?? [] };
}

export function useFetchMemberReward(type: PeriodStateType) {
  const { loading, data } = useQuery(FETCH_MEMBER_REWARD, { variables: { data: { type } } });

  return { loading, memberReward: data?.averageMemberReward ?? [] };
}

export function useFetchCommissionByPeriod(type: PeriodStateType) {
  const { loading, data } = useQuery(FETCH_COMMISSION_BY_PERIOD, { variables: { data: { type } } });

  return { loading, commission: data?.commissionByPeriod ?? [] };
}

export function useFetchRevenue() {
  const { loading, data } = useQuery(FETCH_REVENUE_QUERY);

  return {
    loading,
    revenue: data?.revenueOverview,
  };
}

export function useFetchLatestReward() {
  const { loading, data } = useQuery(FETCH_LATEST_REWARD);

  return { loading, latest: data?.latestStatistics ?? [] };
}

export function useFetchTXCShares(type: PeriodStateType) {
  const { loading, data } = useQuery(FETCH_TXC_SHARES, { variables: { data: { type } } });

  return { loading, txcShares: data?.txcShares ?? [] };
}

export function useFetchTopEarners() {
  const { loading, data } = useQuery(FETCH_TOP_EARNERS);

  return { loading, topEarners: data?.topEarners ?? [] };
}

export function useFetchTopRecruiters() {
  const { loading, data } = useQuery(FETCH_TOP_RECRUITERS);

  return { loading, topRecruiters: data?.topRecruiters ?? [] };
}

export function useFetchMemberByCountry() {
  const { loading, data } = useQuery(FETCH_MEMBERS_BY_COUNTRY);

  return { loading, members: data?.membersByCountry ?? [] };
}
