import { gql } from 'src/__generated__/gql';

export const FETCH_EMAIL_RECIPIENTS = gql(/* GraphQL */ `
  query EmailRecipients($sort: String, $page: String, $filter: JSONObject) {
    emailRecipients(sort: $sort, page: $page, filter: $filter) {
      emailRecipients {
        id
        body
        sender
        status
        sentAt
        subject
        openedAt
        receiver
        isVisible
        senderName
      }
      total
    }
  }
`);

export const FETCH_CAMPAIGN_MEMBER = gql(/* GraphQL */ `
  query EmailRecipientById($emailRecipientByIdId: ID!) {
    emailRecipientById(id: $emailRecipientByIdId) {
      id
      body
      sender
      status
      sentAt
      subject
      openedAt
      receiver
      isVisible
      senderName
    }
  }
`);

export const EMAIL_REGION_WITH_UNSUBSCRIBE = gql(/* GraphQL */ `
  query EmailRegionsWithUnsubscribe {
    emailRegionsWithUnsubscribe {
      id
      region
      description
      unsubscribed
      unsubscribedAt
    }
  }
`);

export const SUBSCRIBE_EMAIL_REGION = gql(/* GraphQL */ `
  mutation SubscribeEmailRegion($subscribeEmailRegionId: ID!) {
    subscribeEmailRegion(id: $subscribeEmailRegionId) {
      result
      message
    }
  }
`);

export const UNSUBSCRIBE_EMAIL_REGION = gql(/* GraphQL */ `
  mutation UnsubscribeEmailRegion($unsubscribeEmailRegionId: ID!) {
    unsubscribeEmailRegion(id: $unsubscribeEmailRegionId) {
      result
      message
    }
  }
`);
