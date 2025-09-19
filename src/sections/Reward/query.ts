import { gql } from 'src/__generated__/gql';

export const FETCH_STATISTICS_QUERY = gql(/* GraphQL */ `
  query Reward($sort: String, $page: String, $filter: JSONObject) {
    statistics(sort: $sort, page: $page, filter: $filter) {
      statistics {
        id
        to
        from
        status
        issuedAt
        txcShared
        newBlocks
        totalBlocks
        rewardedTXC
        totalMembers
        totalHashPower
      }
      total
    }
  }
`);

export const FETCH_MEMBER_STATISTICS_QUERY = gql(/* GraphQL */ `
  query FetchMemberStatistics($sort: String, $page: String, $filter: JSONObject) {
    memberStatistics(sort: $sort, page: $page, filter: $filter) {
      memberStatistics {
        id
        percent
        issuedAt
        memberId
        txcShared
        hashPower
        createdAt
        updatedAt
        deletedAt
        statisticsId
        member {
          id
          username
          fullName
        }
      }
      total
    }
  }
`);

export const REWARD_BY_WALLETS = gql(/* GraphQL */ `
  query Rewards($from: DateTimeISO!, $to: DateTimeISO!) {
    rewardsByWallets(from: $from, to: $to) {
      rewards {
        txc
        wallet {
          id
          address
          percent
          payout {
            name
            method
          }
        }
      }
    }
  }
`);

export const FETCH_DAILY_REWARD = gql(/* GraphQL */ `
  query DailyRewards($from: DateTimeISO!, $to: DateTimeISO!) {
    dailyRewards(from: $from, to: $to) {
      rewards {
        day
        rewardsByWallet {
          txc
          wallet {
            address
            payout {
              method
            }
          }
        }
        totalTxc
      }
    }
  }
`);

export const FETCH_MEMBER_STATISTICS_WALLETS_QUERY = gql(/* GraphQL */ `
  query MemberStatisticsWallets($sort: String, $page: String, $filter: JSONObject) {
    memberStatisticsWallets(sort: $sort, page: $page, filter: $filter) {
      memberStatisticsWallets {
        id
        txc
        issuedAt
        memberWallet {
          address
        }
        memberStatistic {
          hashPower
          percent
          txcShared
        }
      }
    }
  }
`);
