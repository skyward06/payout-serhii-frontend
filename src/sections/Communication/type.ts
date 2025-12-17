import type { EmailStatus } from 'src/__generated__/graphql';

export type EmailRecipient = {
  __typename?: 'EmailRecipient';
  id: string;
  sender: string;
  receiver: string;
  isVisible: boolean;
  senderName: string;
  status: EmailStatus;
  sentAt?: any | null;
  body?: string | null;
  openedAt?: any | null;
  subject?: string | null;
};
