import { createContext } from 'react';

import type { ReimbursementContextValue } from '../type';

export const ReimbursementContext = createContext<ReimbursementContextValue | undefined>(undefined);
