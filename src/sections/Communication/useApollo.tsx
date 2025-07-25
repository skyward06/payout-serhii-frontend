import { useRef, useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { parseFilterModel } from 'src/utils/parseFilter';

import { FETCH_CAMPAIGN_MEMBER, FETCH_EMAIL_RECIPIENTS } from './query';

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

export function useFetchCampaignMember(id: string) {
  const { loading, data, error } = useQuery(FETCH_CAMPAIGN_MEMBER, { variables: { data: { id } } });

  return { loading, campaignMember: data?.emailRecipientById, error };
}
