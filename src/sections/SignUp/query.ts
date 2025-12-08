import { gql } from 'src/__generated__/gql';

export const SIGN_UP_MEMBER = gql(/* GraphQL */ `
  mutation SignUpMember($data: SignupFormInput!) {
    signUpMember(data: $data) {
      id
      email
      username
    }
  }
`);

export const SEND_EMAIL_VERIFICATION_CODE = gql(/* GraphQL */ `
  mutation SendEmailVerificationCode {
    sendEmailVerificationCode {
      message
      result
    }
  }
`);

export const FETCH_PROMOS_QUERY = gql(/* GraphQL */ `
  query Promos($sort: String, $page: String, $filter: JSONObject) {
    promos(sort: $sort, page: $page, filter: $filter) {
      promotions {
        code
        status
        endDate
        startDate
        createdAt
        updatedAt
        deletedAt
        description
      }
      total
    }
  }
`);

export const FETCH_SIGN_UP_PACKAGES = gql(/* GraphQL */ `
  query SignUpPackages {
    signUpPackages {
      id
      ID
      date
      token
      point
      amount
      status
      editable
      freeShare
      productName
      orderVisibility
      enrollVisibility
    }
  }
`);

export const PAYMENT_METHOD_PACKAGE_RULES = gql(/* GraphQL */ `
  query PaymentMethodPackageRules {
    paymentMethodPackageRules {
      id
      packageId
      isWhiteList
      paymentMethod
    }
  }
`);
