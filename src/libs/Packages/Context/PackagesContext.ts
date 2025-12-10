import { createContext } from 'react';

import type { PackagesContextValue } from '../type';

export const PackagesContext = createContext<PackagesContextValue | undefined>(undefined);
