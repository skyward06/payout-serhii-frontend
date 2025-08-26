import { useContext } from 'react';

import { MemberContext } from './MemberContext';

export function useMemberContext() {
  const context = useContext(MemberContext);

  if (!context) {
    throw new Error('useMemberContext must be used within a MemberProvider');
  }

  return context;
}
