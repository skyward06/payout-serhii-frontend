import { gql } from 'src/__generated__/gql';

export const TXC_REQUEST_LIST = gql(/* GraphQL */ `
  query TxcRequests($sort: String, $page: String, $filter: JSONObject) {
    txcRequests(sort: $sort, page: $page, filter: $filter) {
      txcRequests {
        id
        ID
        type
        status
        paidAt
        sentAt
        memberId
        txcPrice
        inputChain
        inputToken
        outputChain
        outputToken
        paidBalance
        sentBalance
        inputAddress
        outputAddress
        inputBalanceInCent
        paidTransactionHash
        sentTransactionHash
      }
      total
    }
  }
`);

export const CREATE_BUY_TXC_ORDER = gql(/* GraphQL */ `
  mutation CreateBuyTXCOrder($data: CreateBuyTXCInput!) {
    createBuyTXCOrder(data: $data) {
      id
    }
  }
`);

export const CREATE_BUY_WTXC_ORDER = gql(/* GraphQL */ `
  mutation CreateBuyWTXCOrder($data: CreateBuyWTXCInput!) {
    createBuyWTXCOrder(data: $data) {
      id
    }
  }
`);
