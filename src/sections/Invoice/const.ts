import type { InvoiceStatus } from 'src/__generated__/graphql';

export type INVOICE_KEY_VALUE_TYPE = InvoiceStatus;

export const INVOICE_VALUE: Record<INVOICE_KEY_VALUE_TYPE, string> = {
  PAID: 'PAID',
  PENDING: 'PENDING',
};
