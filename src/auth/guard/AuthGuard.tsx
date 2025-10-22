import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { SplashScreen } from 'src/components/loading-screen';

import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthGuard({ children }: Props) {
  const router = useRouter();
  const { pathname } = useLocation();

  const { isAuthenticated, loading } = useAuthContext();

  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!isAuthenticated) {
      if (pathname === paths.dashboard.profile.activation) {
        router.replace(
          `${paths.auth.signIn}?returnTo=${encodeURIComponent(paths.dashboard.profile.activation)}`
        );
      } else {
        router.replace(paths.pages.intro.root);
      }
      return;
    }

    setIsChecking(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, loading]);

  if (isChecking) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}
