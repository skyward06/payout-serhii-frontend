import { gql } from 'src/__generated__/gql';

export const CONFIRM_EMAIl = gql(/* GraphQL */ `
  mutation ConfirmEmail5071($data: SuspendedCommissionConfirmInput!) {
    confirmEmail5071(data: $data) {
      result
      message
    }
  }
`);
