import { CommissionDefault } from 'src/__generated__/graphql';

export const parseType = (orderStatus: CommissionDefault): string => {
  switch (orderStatus) {
    case CommissionDefault.Usdc:
      return 'USDC';
    case CommissionDefault.Hash:
      return 'HASH';
    case CommissionDefault.Txc:
      return 'TXC';
    default:
      return orderStatus;
  }
};
