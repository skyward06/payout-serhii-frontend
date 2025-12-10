import { useMemo } from 'react';

import { PackagesContext } from './PackagesContext';
import { useFetchSignUpPackages } from '../useApollo';

import type { PackagesContextValue } from '../type';

interface Props {
  children: React.ReactNode;
}

export function PackagesProvider({ children }: Props) {
  const { packages } = useFetchSignUpPackages();

  const memoizedValue: PackagesContextValue = useMemo(() => ({ packages }), [packages]);

  if (!packages) {
    return [];
  }

  return <PackagesContext.Provider value={memoizedValue}>{children}</PackagesContext.Provider>;
}
