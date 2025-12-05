import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';

import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hooks';

import { useFetchPostBySlug } from 'src/sections/Post/useApollo';

import { PostContext } from './PostContext';

import type { PostContextValue } from '../type';

interface Props {
  children: React.ReactNode;
}

export function PostProvider({ children }: Props) {
  const { slug } = useParams();

  const { post } = useFetchPostBySlug(slug!);

  const memoizedValue: PostContextValue = useMemo(() => ({ post }), [post]);

  if (!post) {
    return <Navigate to={paths.notFound} />;
  }

  return <PostContext.Provider value={memoizedValue}>{children}</PostContext.Provider>;
}
