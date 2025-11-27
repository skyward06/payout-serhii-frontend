import { gql } from 'src/__generated__/gql';

export const FETCH_EVENTS = gql(/* GraphQL */ `
  query Events($period: EventPeriod!) {
    events(period: $period) {
      id
      end
      color
      start
      allDay
      region
      title
      createdAt
      updatedAt
      description
    }
  }
`);
