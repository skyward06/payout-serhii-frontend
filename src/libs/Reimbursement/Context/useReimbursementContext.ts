import { useContext } from 'react';

import { ReimbursementContext } from './ReimbursementContext';

export function useReimbursementContext() {
  const context = useContext(ReimbursementContext);

  if (!context) {
    throw new Error('useReimbursementContext must be used within a ProofProvider');
  }

  return context;
}
