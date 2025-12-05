import { useRef, useMemo } from 'react';
import { useLazyQuery, useSuspenseQuery } from '@apollo/client';

import { FETCH_POSTS, FETCH_POST_BY_SLUG } from './query';

export function useFetchPosts() {
  const [fetchPosts, { loading, data, error }] = useLazyQuery(FETCH_POSTS);

  const rowCountRef = useRef(data?.posts.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.posts.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return { loading, rowCount, posts: data?.posts.posts ?? [], error, fetchPosts };
}

export function useFetchPostBySlug(slug: string) {
  const { data, error } = useSuspenseQuery(FETCH_POST_BY_SLUG, {
    variables: { data: { slug } },
  });

  return { post: data?.postBySlug, error };
}
