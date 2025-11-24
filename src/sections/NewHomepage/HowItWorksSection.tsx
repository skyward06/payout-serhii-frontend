import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { common } from 'src/theme/core';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const STEPS = [
  {
    step: 1,
    title: 'Create Account',
    description: 'Sign up in minutes and get access to your personal mining dashboard.',
    icon: 'mdi:account-plus',
  },
  {
    step: 2,
    title: 'Choose Package',
    description: 'Select the mining package that fits your goals and budget.',
    icon: 'mdi:package-variant',
  },
  {
    step: 3,
    title: 'Start Mining',
    description: 'Begin earning cryptocurrency immediately with our hosted mining solution.',
    icon: 'mdi:lightning-bolt',
  },
];

// ----------------------------------------------------------------------

export function HowItWorksSection() {
  return (
    <Box py={8} bgcolor="background.neutral">
      <Container component={MotionViewport}>
        <Stack textAlign="center" mb={8}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" fontWeight={700}>
              How It Works
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography color="text.secondary" maxWidth={600} mx="auto">
              Get started with mining in three simple steps. No technical knowledge required.
            </Typography>
          </m.div>
        </Stack>

        <Stack
          spacing={{ xs: 8, md: 12 }}
          position="relative"
          sx={{
            '&::before': {
              content: '""',
              position: 'absolute',
              left: '50%',
              top: 80,
              bottom: 80,
              width: 2,
              bgcolor: alpha(common.secondary, 0.16),
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' },
            },
          }}
        >
          {STEPS.map((step, index) => (
            <m.div key={step.step} variants={varFade().inUp}>
              <Stack
                direction={{ xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                spacing={4}
                alignItems="center"
                textAlign={{ xs: 'center', md: index % 2 === 0 ? 'left' : 'right' }}
              >
                <Stack spacing={2} flex={1}>
                  <Box
                    display="inline-flex"
                    mx={{ xs: 'auto', md: index % 2 === 0 ? 0 : 'auto' }}
                    ml={{ md: index % 2 === 0 ? 0 : 'auto' }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: 'common.primary',
                        color: 'common.white',
                        fontWeight: 700,
                      }}
                    >
                      {step.step}
                    </Avatar>
                  </Box>

                  <Typography variant="h4" fontWeight={700}>
                    {step.title}
                  </Typography>

                  <Typography color="text.secondary">{step.description}</Typography>
                </Stack>

                <Box
                  width={{ xs: 80, md: 120 }}
                  height={{ xs: 80, md: 120 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  bgcolor={alpha(common.primary, 0.08)}
                  border={`2px dashed ${alpha(common.primary, 0.24)}`}
                  position="relative"
                  zIndex={1}
                  flexShrink={0}
                >
                  <Iconify icon={step.icon} width={48} height={48} color="common.primary" />
                </Box>

                <Box flex={1} display={{ xs: 'none', md: 'block' }} />
              </Stack>
            </m.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
