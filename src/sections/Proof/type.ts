// TODO: Get type from codegen instead of copying
// Copied from src/__generated__/graphql/AccountsQuery

import type { PFile, ProofType } from 'src/__generated__/graphql';

export type RefLink = {
  __typename?: 'RefLink';
  link: string;
  linkType: string;
};

export type Proof = {
  __typename?: 'Proof';
  id: string;
  amount: number;
  createdAt?: any | null;
  deletedAt?: any | null;
  files?: Array<PFile> | null;
  mineLocation?: string | null;
  note?: string | null;
  orderedAt: any;
  refId: string;
  refLinks?: Array<RefLink> | null;
  type: ProofType;
  updatedAt?: any | null;
};
