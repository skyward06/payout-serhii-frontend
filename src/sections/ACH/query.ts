import { gql } from 'src/__generated__/gql';

export const SUBMIT_ORDER_ACH = gql(/* GraphQL */ `
  mutation SubmitOrderACHPayment($data: OrderACHSubmitInput!) {
    submitOrderACHPayment(data: $data) {
      ID
    }
  }
`);
