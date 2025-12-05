import { createContext } from 'react';

import type { PostContextValue } from '../type';

export const PostContext = createContext<PostContextValue | undefined>(undefined);
