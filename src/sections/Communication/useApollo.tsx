import { useRef, useMemo, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { parseFilterModel } from 'src/utils/parseFilter';

import {
  FETCH_CAMPAIGN_MEMBER,
  FETCH_EMAIL_RECIPIENTS,
  SUBSCRIBE_EMAIL_REGION,
  UNSUBSCRIBE_EMAIL_REGION,
  EMAIL_REGION_WITH_UNSUBSCRIBE,
} from './query';

export function useFetchEmailRecipients() {
  const [{ page = '1,50', sort = 'createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { loading, data } = useQuery(FETCH_EMAIL_RECIPIENTS, {
    variables: { filter: graphQueryFilter, page, sort },
  });

  const rowCountRef = useRef(data?.emailRecipients.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.emailRecipients.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return { loading, rowCount, emailRecipients: data?.emailRecipients?.emailRecipients ?? [] };
}

export function useFetchCampaignMember(emailRecipientByIdId: string) {
  const { loading, data, error } = useQuery(FETCH_CAMPAIGN_MEMBER, {
    variables: { emailRecipientByIdId },
  });

  return { loading, campaignMember: data?.emailRecipientById, error };
}

export function useFetchEmailRegionsWithUnsubscribe() {
  const { loading, data, error } = useQuery(EMAIL_REGION_WITH_UNSUBSCRIBE);

  return { loading, emailRegions: data?.emailRegionsWithUnsubscribe ?? [], error };
}

export function useSubscribeEmailRegion() {
  const [submit, { loading, error }] = useMutation(SUBSCRIBE_EMAIL_REGION, {
    awaitRefetchQueries: true,
    refetchQueries: ['EmailRegionsWithUnsubscribe'],
  });

  const subscribeEmailRegion = useCallback(
    (subscribeEmailRegionId: string) => submit({ variables: { subscribeEmailRegionId } }),
    [submit]
  );

  return { loading, error, subscribeEmailRegion };
}

export function useUnsubscribeEmailRegion() {
  const [submit, { loading, error }] = useMutation(UNSUBSCRIBE_EMAIL_REGION, {
    awaitRefetchQueries: true,
    refetchQueries: ['EmailRegionsWithUnsubscribe'],
  });

  const unsubscribeEmailRegion = useCallback(
    (unsubscribeEmailRegionId: string) => submit({ variables: { unsubscribeEmailRegionId } }),
    [submit]
  );

  return { loading, error, unsubscribeEmailRegion };
}
