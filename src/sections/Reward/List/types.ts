// ----------------------------------------------------------------------

export type IStatisticsTableFilters = {
  search: string;
};

export type IStatisticsPrismaFilter = {
  OR?: any;
  issuedAt?: any;
};

export type RewardByWallet = {
  __typename?: 'RewardByWallet';
  txc: bigint;
  wallet: {
    __typename?: 'MemberWallet';
    address: string;
    payout?: {
      __typename?: 'Payout';
      method: string;
    } | null;
  };
};
