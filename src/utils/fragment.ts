import { gql } from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';

export const fragment = {
  fragments: createFragmentRegistry(gql`
    fragment MemberFields on Member {
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
      username
      fullName
      sponsorId
      allowState
      ethAssetId
      teamReport
      OTPEnabled
      teamStrategy
      syncWithSendy
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
      preferredContactDetail
    }
    fragment PlacementMemberFields on PlacementMember {
      id
      status
      username
      fullName
      createdAt
      teamStrategy
      placementStatus
      placementPosition
      placementParentId
      cmnCalculatedWeeks
      commission {
        begL
        begR
        newL
        newR
      }
    }
  `),
};
