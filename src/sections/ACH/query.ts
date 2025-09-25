import { gql } from 'src/__generated__/gql';

export const CREATE_ACH = gql(/* GraphQL */ `
  mutation CreateACH($data: CreateACHInput!) {
    createACH(data: $data) {
      id
    }
  }
`);
