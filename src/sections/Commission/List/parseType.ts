import {
  CommissionType,
  CommissionDefault,
  WeeklyCommissionPaymentMade,
} from 'src/__generated__/graphql';

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

export const commissionParseType = (commissionType: CommissionType): string => {
  switch (commissionType) {
    case CommissionType.Normal:
      return 'Normal';
    case CommissionType.Supernova:
      return 'Supernova';
    default:
      return commissionType;
  }
};

export const paidParseType = (paidAs: WeeklyCommissionPaymentMade): string => {
  switch (paidAs) {
    case WeeklyCommissionPaymentMade.Cash:
      return 'Cash';
    case WeeklyCommissionPaymentMade.Hash:
      return 'Hash';
    case WeeklyCommissionPaymentMade.Both:
      return 'Both';
    case WeeklyCommissionPaymentMade.None:
      return 'None';
    default:
      return paidAs;
  }
};
