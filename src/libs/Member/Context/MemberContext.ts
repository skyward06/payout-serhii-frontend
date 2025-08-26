import { createContext } from 'react';

import type { MemberContextValue } from '../type';

export const MemberContext = createContext<MemberContextValue | undefined>(undefined);
