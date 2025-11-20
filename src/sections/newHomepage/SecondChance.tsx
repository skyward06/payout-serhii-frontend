import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
        pr: 3,
        gap: 5,
        borderRadius: 2,
        display: 'flex',
        height: { md: 1 },
        position: 'relative',
        pl: { xs: 3, md: 5 },
        alignItems: 'center',
        color: 'common.white',
        textAlign: { xs: 'center', md: 'left' },
        flexDirection: { xs: 'column', md: 'row' },
        border: `solid 1px ${theme.vars.palette.grey[800]}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Typography variant="h4" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
          Second Chance At Crypto
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.64, maxWidth: 360, mb: 3 }}>
          Join us faster, cheaper and better than Bitcoin in almost every way, our passionate
          affiliates are on track to make $TXC bigger than the world&apos;s leading crypto. Join us,
          help secure the TEXITcoin network, and play an active role in the success of $TXC.
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

      <SeoIllustration hideBackground />
    </Box>
  );
}
