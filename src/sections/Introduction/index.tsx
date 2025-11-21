import { useEffect } from 'react';
import { useLocation } from 'react-router';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import Brief from './Brief';
import Quick from './Quick';
import Steps from './Steps';
import Texit from './Texit';
import WhatsIn from './WhatsIn';
import { Packages } from './Packages';
import { SignUpView } from '../SignUp';

export function Introduction() {
  const { hash } = useLocation();
  const pageProgress = useScrollProgress();

  useEffect(() => {
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

    if (hash.includes('sign-up')) {
      scrollToSignUp();
    }
  }, [hash]);

  return (
    <Stack>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Stack sx={{ position: 'relative' }}>
        <Brief />

        <WhatsIn />

        <Quick />

        <Steps />

        <Texit />

        <Packages />

        <Container>
          <SignUpView />
        </Container>
      </Stack>
    </Stack>
  );
}
