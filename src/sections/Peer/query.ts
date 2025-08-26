import { gql } from 'src/__generated__/gql';

export const CONFIRMATION_PEER_PAYMENT = gql(/* GraphQL */ `
  mutation ConfirmPeerPayment($confirmPeerPaymentId: ID!) {
    confirmPeerPayment(id: $confirmPeerPaymentId) {
      result
      message
    }
  }
`);
