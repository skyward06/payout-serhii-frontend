import { gql } from 'src/__generated__/gql';

export const FETCH_CAMPAIGN_MEMBER = gql(/* GraphQL */ `
  query EmailRecipient($data: IDInput!) {
    emailRecipient(data: $data) {
      id
      body
      email
      sender
      status
      sentAt
      subject
      openedAt
      senderName
    }
  }
`);
