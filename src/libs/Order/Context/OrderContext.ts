import { createContext } from 'react';

import type { OrderContextValue } from '../type';

export const OrderContext = createContext<OrderContextValue | undefined>(undefined);
