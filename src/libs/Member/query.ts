import { gql } from 'src/__generated__/gql';

export const FETCH_MEMBER_BY_ID = gql(/* GraphQL */ `
  query MemberById($data: IDInput!) {
    memberById(data: $data) {
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
      peerAcceptable
      peerETHAddress
      primaryAddress
      secondaryAddress
      totalIntroducers
      preferredContact
      commissionDefault
      placementParentId
      placementPosition
      cmnCalculatedWeeks
      placementRequested
      shareIsTexitRanger
      preferredContactDetail
    }
  }
`);
