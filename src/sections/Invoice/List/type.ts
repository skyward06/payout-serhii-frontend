import type { PFile, InvoiceStatus } from 'src/__generated__/graphql';

export type Invoice = {
  __typename?: 'Invoice';
  id: string;
  ID: number;
  name: string;
  dueDate: any;
  description: string;
  amountInCents: number;
  status: InvoiceStatus;
  invoiceFile?: PFile | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  deletedAt?: any | null;
};
