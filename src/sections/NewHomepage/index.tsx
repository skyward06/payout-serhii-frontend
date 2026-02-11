import { useEffect } from 'react';
import { useLocation } from 'react-router';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Texit } from './Texit';
import { Quick } from './Quick';
import { Packages } from './Packages';
import { QuickCharts } from './QuickCharts';
import { HeroSection } from './HeroSection';
import { LightWidget } from './LightWidget';
import { ChartsSection } from './ChartsSection';
import { UpcomingEvents } from './UpcomingEvents';
import { ContentSections } from './ContentSections';
import { FeaturesSection } from './FeaturesSection';
import { HowItWorksSection } from './HowItWorksSection';

export function NewHomePage() {
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

      <Box sx={{ position: 'relative' }}>
        <QuickCharts />

        <HeroSection />

        <Quick />

        <ChartsSection />

        <UpcomingEvents />

        <ContentSections />

        <LightWidget />

        <FeaturesSection />

        <HowItWorksSection />

        <Texit />

        <Packages />

        {/* <Box py={8} bgcolor="background.neutral">
          <Container>
            <SignUpView />
          </Container>
        </Box> */}
      </Box>
    </Stack>
  );
}
