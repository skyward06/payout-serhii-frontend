// ----------------------------------------------------------------------

export type IStatisticsTableFilters = {
  search: string;
};

export type IStatisticsPrismaFilter = {
  OR?: any;
  issuedAt?: any;
};

export type RewardByAddress = {
  __typename?: 'RewardByAddress';
  txc: bigint;
  address: string;
};
