import type { PFile, ReimbursementStatus } from 'src/__generated__/graphql';

export type BasicReimbursement = {
  __typename?: 'BasicReimbursement';
  id: number;
  createdAt: any;
  memberId: string;
  username?: string | null;
  fullName?: string | null;
  status: ReimbursementStatus;
  description?: string | null;
  requestedAmountInCent: number;
  paidAmountInCent?: number | null;
  attachments?: Array<PFile> | null;
};
