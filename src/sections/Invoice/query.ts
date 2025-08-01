import { gql } from 'src/__generated__/gql';

export const FETCH_INVOICES_QUERY = gql(/* GraphQL */ `
  query Invoices($sort: String, $page: String, $filter: JSONObject) {
    invoices(sort: $sort, page: $page, filter: $filter) {
      invoices {
        id
        ID
        name
        status
        dueDate
        createdAt
        description
        amountInCents
        invoiceFile {
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
