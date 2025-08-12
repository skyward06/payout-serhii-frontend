import { useQuery } from '@apollo/client';

import { REWARD_BY_WALLETS } from './query';

export function useFetchReward({ from, to }: { from: string; to: string }) {
  const { loading, data } = useQuery(REWARD_BY_WALLETS, {
    variables: { from, to },
  });

  return { loading, reward: data?.rewardsByWallets.rewards ?? [] };
}
