import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router';

import { paths } from 'src/routes/paths';

import { useFetchReimbursementById } from 'src/sections/Reimbursement/useApollo';

import { ReimbursementContext } from './ReimbursementContext';

import type { ReimbursementContextValue } from '../type';

interface Props {
  children: React.ReactNode;
}

export function ReimbursementProvider({ children }: Props) {
  const { id } = useParams();

  const { reimbursement } = useFetchReimbursementById(Number(id));

  const memoizedValue: ReimbursementContextValue = useMemo(
    () => ({ reimbursement }),
    [reimbursement]
  );

  if (!reimbursement) {
    return <Navigate to={paths.notFound} />;
  }

  return (
    <ReimbursementContext.Provider value={memoizedValue}>{children}</ReimbursementContext.Provider>
  );
}
