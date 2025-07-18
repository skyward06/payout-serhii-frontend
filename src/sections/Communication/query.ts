import { gql } from 'src/__generated__/gql';

export const FETCH_EMAIL_RECIPIENTS = gql(/* GraphQL */ `
  query EmailRecipients($sort: String, $page: String, $filter: JSONObject) {
    emailRecipients(sort: $sort, page: $page, filter: $filter) {
      emailRecipients {
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
      total
    }
  }
`);

export const FETCH_CAMPAIGN_MEMBER = gql(/* GraphQL */ `
  query EmailRecipientById($data: IDInput!) {
    emailRecipientById(data: $data) {
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
