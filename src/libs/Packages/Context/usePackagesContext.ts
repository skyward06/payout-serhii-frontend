import { useContext } from 'react';

import { PackagesContext } from './PackagesContext';

export function usePackagesContext() {
  const context = useContext(PackagesContext);

  if (!context) {
    throw new Error('usePackagesContext muse be used within a PackagesProvider');
  }

  return context;
}
