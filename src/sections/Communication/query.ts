import { gql } from 'src/__generated__/gql';

export const FETCH_CAMPAIGN_MEMBER = gql(/* GraphQL */ `
  query CampaignMember($data: IDInput!) {
    campaignMember(data: $data) {
      id
      body
      open
      sent
      email
      sender
      subject
      openTime
      sentTime
    }
  }
`);
