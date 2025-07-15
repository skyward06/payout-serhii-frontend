import { useLazyQuery } from '@apollo/client';

import { FETCH_CAMPAIGN_MEMBER } from './query';

export function useFetchCampaignMember() {
  const [fetchCampaignMember, { loading, data, error }] = useLazyQuery(FETCH_CAMPAIGN_MEMBER);

  return { loading, campaignMember: data?.campaignMember, error, fetchCampaignMember };
}
