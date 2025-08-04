import { InvoiceStatus } from 'src/__generated__/graphql';

export const parseType = (invoiceType: InvoiceStatus): string => {
  switch (invoiceType) {
    case InvoiceStatus.Paid:
      return 'Paid';
    case InvoiceStatus.Pending:
      return 'Pending';
    default:
      return invoiceType;
  }
};
