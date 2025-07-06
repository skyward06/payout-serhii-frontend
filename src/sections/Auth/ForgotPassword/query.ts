import { gql } from 'src/__generated__';

export const RESET_PASSWORD_REQUEST = gql(/* GraphQL */ `
  mutation RequestResetPassword($data: EmailInput!) {
    requestResetPassword(data: $data) {
      result
      message
    }
  }
`);
