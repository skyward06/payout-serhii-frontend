import { gql } from 'src/__generated__';

export const FETCH_COMMISSION_QUERY = gql(/* GraphQL */ `
  query WeeklyCommissions($sort: String, $page: String, $filter: JSONObject) {
    weeklyCommissions(sort: $sort, page: $page, filter: $filter) {
      weeklyCommissions {
        id
        ID
        begL
        begR
        newL
        newR
        maxL
        maxR
        endL
        endR
        pkgL
        pkgR
        note
        paidAs
        status
        hasUSDC
        username
        fullName
        memberId
        createdAt
        shortNote
        commission
        commissionType
        weekStartDate
        paymentMethod
      }
      total
    }
  }
`);

export const FETCH_COMMISSION_STATS_QUERY = gql(/* GraphQL */ `
  query FetchCommissionStats(
    $allFilter: JSONObject
    $pendingFilter: JSONObject
    $approvedFilter: JSONObject
    $archivedFilter: JSONObject
    $suspendedFilter: JSONObject
  ) {
    all: weeklyCommissions(filter: $allFilter) {
      total
    }
    pending: weeklyCommissions(filter: $pendingFilter) {
      total
    }
    suspended: weeklyCommissions(filter: $suspendedFilter) {
      total
    }
    approved: weeklyCommissions(filter: $approvedFilter) {
      total
    }
    archived: weeklyCommissions(filter: $archivedFilter) {
      total
    }
  }
`);
