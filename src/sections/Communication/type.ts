import type { EmailStatus } from 'src/__generated__/graphql';

export type EmailRecipient = {
  __typename?: 'EmailRecipient';
  id: string;
  email: string;
  sender: string;
  isVisible: boolean;
  senderName: string;
  status: EmailStatus;
  sentAt?: any | null;
  body?: string | null;
  openedAt?: any | null;
  subject?: string | null;
};
