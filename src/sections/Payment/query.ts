import { gql } from 'src/__generated__/gql';

export const FETCH_PAYMENT_QUERY = gql(/* GraphQL */ `
  query PaymentMethods {
    paymentMethods {
      id
      name
      createdAt
      adminVisible
      enrollmentVisible
    }
  }
`);

export const ENROLLMENT_PAYMENT_METHODS = gql(/* GraphQL */ `
  query EnrollmentPaymentMethods {
    enrollmentPaymentMethods {
      id
      name
      adminVisible
      enrollmentVisible
    }
  }
`);
