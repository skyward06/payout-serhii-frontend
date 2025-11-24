import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { common } from 'src/theme/core';

import { Image } from 'src/components/Image';
import { varFade, MotionViewport } from 'src/components/animate';

export function Texit() {
  const features = [
    {
      icon: `${CONFIG.site.basePath}/assets/intro/texit-icon1.png`,
      title: '254 Block Reward',
      description:
        'An inflation-crushing block is mined every 3 minutes with coins to compensate miners for securing transactions.',
    },
    {
      icon: `${CONFIG.site.basePath}/assets/intro/texit-icon2.png`,
      title: '0.00 pre-mine',
      description:
        'No pre-mined coins means everyone starts on a level playing field. Mining is permissioned for Texas.',
    },
    {
      icon: `${CONFIG.site.basePath}/assets/intro/texit-icon3.png`,
      title: '3-Minute Spacing',
      description:
        'Lightning fast transactions are processed every 3 minutes. Enhancements are easy to code and deploy.',
    },
    {
      icon: `${CONFIG.site.basePath}/assets/intro/texit-icon4.png`,
      title: '695,662 Halving',
      description:
        'TXC is a blockchain designed to function for a century of growth. Future generations of Texans will benefit.',
    },
  ];

  return (
    <Box py={8} bgcolor={(theme) => alpha(theme.palette.grey[500], 0.04)}>
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Stack spacing={4}>
                <Stack spacing={2}>
                  <Typography variant="h2" fontWeight={400} lineHeight={1.1}>
                    For Texas by Texans,
                  </Typography>
                  <Typography variant="h2" fontWeight={700} lineHeight={1.1}>
                    TXC is built for us.
                  </Typography>
                  <Divider
                    sx={{
                      width: '80%',
                      borderWidth: 1.5,
                      borderColor: 'common.primary',
                      my: 2,
                    }}
                  />
                </Stack>

                <Stack spacing={3}>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    The cryptocurrency revolution has brought many changes to banking, finance &
                    trade. Plenty of new and fancy technologies emerge on a regular basis that offer
                    exotic contributions to the digital money ecosystem.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Unfortunately, few blockchains offer an incentive to participate in securing the
                    network through mining, directly support a world-changing mission, or work as a
                    usable form of money.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    TEXITcoin does all this and more. Join us on the ground floor and help take TXC
                    to the moon!
                  </Typography>
                </Stack>
              </Stack>
            </m.div>
          </Grid>

          <Grid xs={12} md={6} container>
            {features.map((feature) => (
              <Grid key={feature.title} xs={12} md={6}>
                <m.div variants={varFade().inUp}>
                  <Card
                    sx={{
                      p: 3,
                      height: '100%',
                      textAlign: 'center',
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: (theme) => theme.customShadows.z20,
                        borderColor: alpha(common.primary, 0.4),
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Stack spacing={2} alignItems="center">
                      <Box
                        width={64}
                        height={64}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius={2}
                        bgcolor={alpha(common.primary, 0.08)}
                      >
                        <Image src={feature.icon} width={42} height={42} />
                      </Box>
                      <Typography variant="h6" fontWeight={600}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Stack>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
