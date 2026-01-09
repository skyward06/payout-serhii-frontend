import { gql } from 'src/__generated__/gql';

export const SUBMIT_ORDER_ACH_PLAID = gql(/* GraphQL */ `
  mutation SubmitOrderACHPaymentWithPlaid($data: OrderACHSubmitWithPlaidInput!) {
    submitOrderACHPaymentWithPlaid(data: $data) {
      ID
    }
  }
`);

export const CREATE_PLAID_LINK_TOKEN = gql(/* GraphQL */ `
  mutation CreatePlaidLinkToken($data: IDInput!) {
    createPlaidLinkToken(data: $data) {
      requestId
      linkToken
      expiration
    }
  }
`);

export const EXCHANGE_PLAID_PUBLIC_TOKEN = gql(/* GraphQL */ `
  mutation ExchangePlaidPublicToken($data: ExchangePublicTokenInput!) {
    exchangePlaidPublicToken(data: $data) {
      itemId
      accessToken
      accounts {
        name
        type
        mask
        subtype
        accountId
        wireRouting
        officialName
        accountNumber
        routingNumber
        verificationStatus
        balances {
          limit
          current
          available
          isoCurrencyCode
        }
        verificationInsights {
          networkStatus
          nameMatchScore
          previousReturns
          accountNumberFormat
        }
      }
    }
  }
`);
