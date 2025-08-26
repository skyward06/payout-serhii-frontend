import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router';

import { paths } from 'src/routes/paths';

import { MemberContext } from './MemberContext';
import { useFetchMemberById } from '../useApollo';

import type { MemberContextValue } from '../type';

interface Props {
  children: React.ReactNode;
}

export function MemberProvider({ children }: Props) {
  const { id } = useParams();

  const { member } = useFetchMemberById(id!);

  const memoizedValue: MemberContextValue = useMemo(() => ({ member }), [member]);

  if (!member) {
    return <Navigate to={paths.notFound} />;
  }

  return <MemberContext.Provider value={memoizedValue}>{children}</MemberContext.Provider>;
}
