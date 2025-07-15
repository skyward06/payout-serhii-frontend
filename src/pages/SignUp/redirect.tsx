import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { LoadingScreen } from 'src/components/loading-screen';

export default function SignUpRedirectPage() {
  const { search } = useLocation();
  const router = useRouter();

  useEffect(() => {
    router.push(`${paths.pages.intro.root}#sign-up${search}`);

    const maxAttempts = 20;
    let attempts = 0;

    const scrollToSignUp = () => {
      const el = document.getElementById('sign-up');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(scrollToSignUp, 100);
      }
    };

    scrollToSignUp();
  }, [router, search]);

  return <LoadingScreen />;
}
