import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { common } from 'src/theme/core';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FEATURES = [
  {
    icon: 'solar:wallet-money-bold-duotone',
    title: 'Unlimited TXC',
    description:
      'Once your enrollment is complete, freshly minted TXC is paid out to your wallet 24/7/365; no middle-man, commission manager or delays! $TXC direct to you!',
    color: '#00AB55',
  },
  {
    icon: 'solar:gift-bold-duotone',
    title: 'One, two, Free!',
    description:
      "Share your experience with friends and family. Crypto is exciting and there's lots of room for everyone to win. Refer 3 and we'll light up more mining power just for you!",
    color: '#1877F2',
  },
  {
    icon: 'solar:graph-up-bold-duotone',
    title: 'Limitless Binary',
    description:
      'Build out your network and acquire a point for each new member referred anywhere on your team. Get $1000 for each 3 matched points, up to 3 times per week!*',
    color: '#7635DC',
  },
];

// ----------------------------------------------------------------------

export function FeaturesSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: `linear-gradient(135deg, ${common.secondary} 0%, ${common.primary} 50%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <Container component={MotionViewport} sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} sx={{ mb: 8, textAlign: 'center' }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" fontWeight={700} color="common.white">
              What&apos;s In It for You?
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography
              variant="body1"
              sx={{
                color: alpha(theme.palette.common.white, 0.9),
                maxWidth: 640,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              TEXITcoin here to mineTXC
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {FEATURES.map((feature, index) => (
            <m.div key={feature.title} variants={varFade().inUp}>
              <Box
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.common.white, 0.08),
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    bgcolor: alpha(theme.palette.common.white, 0.12),
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    background: alpha(theme.palette.common.white, 0.15),
                  }}
                >
                  <Iconify icon={feature.icon} width={48} sx={{ color: 'common.white' }} />
                </Box>

                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: 'common.white' }}>
                  {feature.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: alpha(theme.palette.common.white, 0.85), lineHeight: 1.8 }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </m.div>
          ))}
        </Box>

        <m.div variants={varFade().inUp}>
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography
              variant="body2"
              sx={{ color: alpha(theme.palette.common.white, 0.7), fontStyle: 'italic' }}
            >
              *Check out the <strong>Rapid Rewards</strong> page for more details on our
              compensation plan.
            </Typography>
          </Box>
        </m.div>
      </Container>
    </Box>
  );
}
