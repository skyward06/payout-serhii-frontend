import { gql } from 'src/__generated__/gql';

export const FETCH_ME_QUERY = gql(/* GraphQL */ `
  query fetchMe {
    memberMe {
      id
      ID
      city
      email
      point
      state
      avatar
      mobile
      status
      assetId
      country
      zipCode
      peerCode
      username
      fullName
      sponsorId
      allowState
      ethAssetId
      teamReport
      OTPEnabled
      teamStrategy
      emailVerified
      isTexitRanger
      totalTXCShared
      peerAcceptable
      peerETHAddress
      primaryAddress
      currentHashPower
      secondaryAddress
      totalIntroducers
      preferredContact
      commissionDefault
      placementParentId
      placementPosition
      placementRequested
      shareIsTexitRanger
      reimbursementEnabled
      orderedAvailablePoint
      preferredContactDetail
      cashCommissionPotential
      groupSetting {
        id
        name
        commissionDefaults
      }
      commission {
        begL
        begR
        newL
        newR
      }
      sponsor {
        id
        username
        fullName
      }
      placementParent {
        id
        username
        fullName
      }
      placementChildren {
        id
        username
        fullName
        placementPosition
      }
      memberWallets {
        id
        note
        address
        percent
        memberId
        payoutId
        isDefault
        payout {
          id
          method
          status
          name
          display
        }
      }
      setting {
        id
        memberId
        communication
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`);

export const FETCH_MEMBER_STATS_QUERY = gql(/* GraphQL */ `
  query FetchMemberStats($inactiveFilter: JSONObject) {
    all: members {
      total
    }
    inactive: members(filter: $inactiveFilter) {
      total
    }
  }
`);

export const FETCH_MEMBER_SEARCH_QUERY = gql(/* GraphQL */ `
  query SearchMembers($sort: String, $page: String, $filter: JSONObject) {
    searchMembers(sort: $sort, page: $page, filter: $filter) {
      id
      email
      username
      fullName
    }
  }
`);

export const FETCH_PLACEMENT_MEMBERS_QUERY = gql(/* GraphQL */ `
  query FetchPlacementMembers {
    sponsorMembers {
      id
      username
      fullName
      sponsorId
      createdAt
    }
  }
`);

export const UPDATE_MEMBER = gql(/* GraphQL */ `
  mutation UpdateMember($data: UpdateMemberInput!) {
    updateMember(data: $data) {
      id
      mobile
      primaryAddress
      secondaryAddress
      memberWallets {
        id
        address
        percent
        memberId
        payoutId
        payout {
          method
          display
        }
      }
      assetId
    }
  }
`);

export const FETCH_MEMBER_STATISTICS = gql(/* GraphQL */ `
  query MemberStatistics($sort: String, $page: String, $filter: JSONObject) {
    memberStatistics(sort: $sort, page: $page, filter: $filter) {
      memberStatistics {
        issuedAt
        hashPower
        txcShared
      }
      total
    }
  }
`);

export const UPDATE_MEMBER_PASSWORD = gql(/* GraphQL */ `
  mutation UpdatePasswordMember($data: UpdateMemberPasswordInput!) {
    updatePasswordMember(data: $data) {
      message
      result
    }
  }
`);

export const GENERATE_2FA = gql(/* GraphQL */ `
  query generateQuery {
    generate2FA
  }
`);

export const VERIFY_2FA_ENABLE = gql(/* GraphQL */ `
  mutation Verify2FAAndEnable($data: Verify2FAInput!) {
    verify2FAAndEnable(data: $data) {
      accessToken
    }
  }
`);

export const VERIFY_2FA_TOKEN = gql(/* GraphQL */ `
  mutation Verify2FAToken($data: TokenInput!) {
    verify2FAToken(data: $data) {
      accessToken
      status
    }
  }
`);

export const DISABLE_2FA = gql(/* GraphQL */ `
  mutation Disable2FA {
    disable2FA {
      accessToken
    }
  }
`);

export const UPDATE_SETTING_MEMBER = gql(/* GraphQL */ `
  mutation UpsertSettingByMemberId($data: UpsertSettingInput!) {
    upsertSettingByMemberId(data: $data) {
      id
    }
  }
`);

export const MEMBER_LOGOUT = gql(/* GraphQL */ `
  mutation MemberLogout {
    memberLogout {
      result
      message
    }
  }
`);

export const MEMBER_EXCHANGE_LOGIN = gql(/* GraphQL */ `
  mutation MemberExchangeLogin($data: MemberLoginInput!) {
    memberExchangeLogin(data: $data) {
      status
      accessToken
      passwordExpired
    }
  }
`);

export const EMAIL_VERIFY_CODE = gql(/* GraphQL */ `
  mutation VerifyEmailCode($data: VerificationCodeInput!) {
    verifyEmailCode(data: $data) {
      accessToken
    }
  }
`);
