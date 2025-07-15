export type CampaignMember = {
  __typename?: 'CampaignMember';
  id: string;
  open: boolean;
  sent: boolean;
  email: string;
  sender: string;
  subject?: string | null;
  openTime?: any | null;
  sentTime?: any | null;
};
