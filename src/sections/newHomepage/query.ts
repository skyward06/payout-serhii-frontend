import { gql } from 'src/__generated__/gql';

export const FETCH_SEAT_FILLED = gql(/* GraphQL */ `
  query SeatFilled {
    seatFilled
  }
`);

export const FETCH_PURCHASED_HASHRATE = gql(/* GraphQL */ `
  query PurchasedHashRate {
    purchasedHashRate
  }
`);
