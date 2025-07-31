import type { Member, TxcRequestType, TxcRequestStatus } from 'src/__generated__/graphql';

export type TXCRequest = {
  __typename?: 'TXCRequest';
  id: string;
  ID: number;
  memberId: string;
  txcPrice: number;
  paidAt?: any | null;
  sentAt?: any | null;
  paidBalance: bigint;
  sentBalance: bigint;
  type: TxcRequestType;
  inputAddress: string;
  outputAddress: string;
  status: TxcRequestStatus;
  paidTransactionHash?: string | null;
  sentTransactionHash?: string | null;
  member?: Member | null;
};
