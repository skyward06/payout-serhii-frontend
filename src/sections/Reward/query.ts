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
        totalMembers
        totalHashPower
      }
      total
    }
  }
`);

export const FETCH_MEMBER_STATISTICS = gql(/* GraphQL */ `
  query FetchMemberStatistics($sort: String, $page: String, $filter: JSONObject) {
    memberStatistics(sort: $sort, page: $page, filter: $filter) {
      memberStatistics {
        id
        sent
        issuedAt
        memberId
        txcShared
        hashPower
        createdAt
        updatedAt
        deletedAt
        statisticsId
        statistic {
          id
          status
          newBlocks
          txcShared
          totalBlocks
          totalMembers
          totalHashPower
        }
      }
      total
    }
  }
`);

export const REWARD_BY_WALLETS = gql(/* GraphQL */ `
  query Rewards($from: Date!, $to: Date!) {
    rewardsByWallets(from: $from, to: $to) {
      rewards {
        txc
        address
      }
    }
  }
`);

export const MEMBER_STATISTICS_WALLETS_BY_DATE = gql(/* GraphQL */ `
  query MemberStatisticWalletsByDate($data: IssuedAtInput!) {
    memberStatisticWalletsByDate(data: $data) {
      id
      txc
      address
      issuedAt
    }
  }
`);
