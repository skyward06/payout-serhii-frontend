import { gql } from 'src/__generated__/gql';

export const VERIFY_EMAIL = gql(/* GraphQL */ `
  mutation VerifyEmailToken($data: TokenInput!) {
    verifyEmailToken(data: $data) {
      result
      message
    }
  }
`);
