import type { PFile, ReimbursementStatus } from 'src/__generated__/graphql';

export type Reimbursement = {
  __typename?: 'Reimbursement';
  id: number;
  memberId: string;
  amountInCent: number;
  status: ReimbursementStatus;
  description?: string | null;
  attachments?: Array<PFile> | null;
};

export type ReimbursementContextValue = {
  reimbursement: Reimbursement;
};
