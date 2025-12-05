import { useContext } from 'react';

import { PostContext } from './PostContext';

export function usePostContext() {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }

  return context;
}
