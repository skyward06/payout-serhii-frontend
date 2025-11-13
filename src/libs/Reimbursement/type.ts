import type { PFile, ReimbursementStatus } from 'src/__generated__/graphql';

export type Reimbursement = {
  __typename?: 'Reimbursement';
  id: number;
  memberId: string;
  payToAddress: string;
  status: ReimbursementStatus;
  description?: string | null;
  requestedAmountInCent: number;
  paidAmountInCent?: number | null;
  attachments: Array<PFile>;
};

export type ReimbursementContextValue = {
  reimbursement: Reimbursement;
};
