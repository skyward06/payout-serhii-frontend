import type { PFile, ReimbursementStatus } from 'src/__generated__/graphql';

export type BasicReimbursement = {
  __typename?: 'BasicReimbursement';
  id: number;
  createdAt: any;
  memberId: string;
  amountInCent: number;
  username?: string | null;
  fullName?: string | null;
  status: ReimbursementStatus;
  description?: string | null;
  attachments?: Array<PFile> | null;
};
