import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';
import SeoIllustration from 'src/assets/illustrations/seo-illustration';

export function SecondChance() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: `to right, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.88)} 0%, ${theme.vars.palette.grey[900]} 75%`,
          imgUrl: `${CONFIG.site.basePath}/assets/background/background-5.webp`,
        }),
        pt: 5,
        pb: 5,
        px: 5,
        gap: 2,
        borderRadius: 2,
        display: 'flex',
        height: { md: 1 },
        position: 'relative',
        alignItems: { xs: 'center', md: 'flex-start' },
        color: 'common.white',
        flexDirection: 'column',
        border: `solid 1px ${theme.vars.palette.grey[800]}`,
      }}
    >
      <Typography
        variant="h4"
        sx={{ whiteSpace: 'pre-line', lineHeight: { md: 0, xs: 1.5 }, mb: 2 }}
      >
        The Exclusive Mining Partner of TEXITcoin
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              gap: 3,
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.64, maxWidth: 400, mb: 3 }}>
              Join the mineTXC community and help us crowdsource the world’s largest, privately
              owned decentralized mine, built in Texas, for EVERYONE. Our work powers the TXC
              blockchain, community currencies & payment systems for fairs & festivals around the
              world.
            </Typography>

            <Button
              href="#sign-up"
              size="large"
              variant="contained"
              color="info"
              sx={{
                px: 5,
                py: 2,
                bgcolor: 'common.primary',
                boxShadow: theme.customShadows.z20,
                '&:hover': {
                  boxShadow: 'theme.customShadows.z24',
                },
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
          <SeoIllustration hideBackground />
        </Grid>
      </Grid>
    </Box>
  );
}
