import { useLazyQuery } from '@apollo/client';
import { useRef, useMemo, useState, useEffect, useCallback } from 'react';

import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { toast } from 'src/components/SnackBar';

import { FETCH_ME_QUERY } from 'src/sections/Profile/query';

import { AuthContext } from './AuthContext';
import { getSession, setSession, getTimeToLive } from '../utils';

import type { AuthContextValue } from '../types';
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

const initialToken = getSession();

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [token, setToken] = useState<string | undefined | null>(initialToken);
  const timeToLive = useMemo(() => getTimeToLive(token), [token]);
  const timerId = useRef<NodeJS.Timeout | undefined>();

  const router = useRouter();
  const [code, setCode] = useState<any>('');

  const searchParams = useSearchParams();

  const [fetchMe, { loading }] = useLazyQuery(FETCH_ME_QUERY, {
    onCompleted: (data) => {
      setUser(data.memberMe);
      setError(null);
    },
    onError: (err) => {
      setError(err);
      setUser(null);
    },
  });

  const expireToken = useCallback(() => {
    setToken(null);
    setSession(null);
    setError(null);

    signOut();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const returnTo = searchParams.get('returnTo');

  const signIn = useCallback(
    (newToken: string) => {
      setSession(newToken);
      setToken(newToken);
      toast.success('Successfully logged in');
      if (returnTo) {
        router.push(decodeURIComponent(returnTo));
      } else {
        router.push(paths.dashboard.profile.root);
      }
    },
    [router, returnTo]
  );

  // LOGOUT ACTION
  const signOut = useCallback(() => {
    setSession(null);
    setToken(null);
    router.push(paths.pages.intro.root);
  }, [router]);

  useEffect(() => {
    if (token) {
      if (timeToLive <= 0) {
        expireToken();
      }
      fetchMe();
    }
  }, [token, timeToLive, expireToken, fetchMe]);

  useEffect(() => {
    if (error) {
      expireToken();
      return;
    }

    if (!timerId.current) {
      timerId.current = setTimeout(() => {
        expireToken();
      }, timeToLive);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timerId.current);
    };
  }, [timeToLive, error, expireToken, signOut]);

  useEffect(() => {
    if (code) {
      const timer = setTimeout(() => {
        setCode(null);
      }, 1800000); // 30 minutes

      return () => clearTimeout(timer); // Cleanup timer on unmount or code change
    }

    return undefined;
  }, [code]);

  const memoizedValue: AuthContextValue = useMemo(
    () => ({ user, token, code, isAuthenticated: !!token, loading, signIn, signOut, setCode }),
    [user, code, token, loading, signIn, signOut, setCode]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
