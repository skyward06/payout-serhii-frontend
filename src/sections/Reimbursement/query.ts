import { gql } from 'src/__generated__/gql';

export const FETCH_REIMBURSEMENT = gql(/* GraphQL */ `
  query Reimbursements($sort: String, $page: String, $filter: JSONObject) {
    reimbursements(sort: $sort, page: $page, filter: $filter) {
      reimbursements {
        id
        amountInCent
        status
        username
        fullName
        memberId
        createdAt
        description
        attachments {
          id
          url
          size
          mimeType
          originalName
        }
      }
      total
    }
  }
`);

export const FETCH_REIMBURSEMENT_BY_ID = gql(/* GraphQL */ `
  query ReimbursementById($id: Int!) {
    reimbursementById(ID: $id) {
      id
      status
      memberId
      description
      amountInCent
      attachments {
        id
        url
        size
        mimeType
        originalName
      }
    }
  }
`);

export const CREATE_REIMBURSEMENT = gql(/* GraphQL */ `
  mutation CreateReimbursement($data: CreateReimbursementInput!) {
    createReimbursement(data: $data) {
      id
    }
  }
`);

export const UPDATE_REIMBURSEMENT = gql(/* GraphQL */ `
  mutation UpdateReimbursement($data: UpdateReimbursementInput!) {
    updateReimbursement(data: $data) {
      id
    }
  }
`);
