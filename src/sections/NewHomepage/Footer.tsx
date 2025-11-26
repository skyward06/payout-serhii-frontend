import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';
import DarkLogo from 'src/components/logo/dark-logo';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'About',
    children: [
      { name: 'Discover TEXITcoin', href: 'https://texitcoin.org/Discover-TEXITcoin.html' },
      { name: 'The Mission', href: 'https://texitcoin.org/The-TEXITcoin-Mission.html' },
      { name: 'Meet the Team', href: 'https://texitcoin.org/Meet-the-Team.html' },
      { name: 'News & Updates', href: 'https://texitcoin.org/News-and-Updates.html' },
      { name: 'Events', href: 'https://texitcoin.org/Events.html' },
    ],
  },
  {
    headline: 'Resources',
    children: [
      { name: 'Block Explorer', href: 'https://explorer.texitcoin.org/' },
      { name: 'Mining Pool', href: 'https://pool.texitcoin.org/statistics' },
      { name: 'TXC Wallets', href: 'https://texitcoin.org/TEXITcoin-Wallets.html' },
      { name: 'CoinMarketCap', href: 'https://coinmarketcap.com/currencies/texitcoin/' },
      { name: 'Tokenomics', href: 'https://texitcoin.org/Tokenomics.html' },
    ],
  },
  {
    headline: 'Support',
    children: [
      { name: 'Help Center', href: 'https://texitcoin.org/' },
      { name: 'Documentation', href: 'https://texitcoin.org/Discover-TEXITcoin.html' },
      { name: 'Contact Us', href: 'https://texitcoin.org/Meet-the-Team.html' },
      { name: 'Gear & Apparel', href: 'https://texitcoin.org/Gear-and-Apparel.html' },
      { name: 'FAQ', href: 'https://texitcoin.org/' },
    ],
  },
];

const SOCIALS = [
  { name: 'TikTok', icon: 'mage:tiktok-circle', url: 'https://www.tiktok.com/@TEXITcoins' },
  { name: 'Telegram', icon: 'logos:telegram', url: 'https://t.me/texitcoin_txc' },
  { name: 'Instagram', icon: 'skill-icons:instagram', url: 'https://www.instagram.com/texitcoin/' },
  { name: 'Twitter', icon: 'skill-icons:twitter', url: 'https://x.com/TEXITcoin' },
];

// ----------------------------------------------------------------------

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.96),
        pt: 10,
        pb: 5,
      }}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {/* Logo and Description */}
          <Grid xs={12} md={4}>
            <m.div variants={varFade().inUp}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <DarkLogo sx={{ mb: 3 }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'grey.500',
                    maxWidth: 280,
                    lineHeight: 1.8,
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  Built in Texas, by Texans. TEXITcoin is a fast, Layer 1 digital currency designed
                  for generations of honest trade.
                </Typography>
              </Box>
            </m.div>

            {/* Social Icons */}
            <m.div variants={varFade().inUp}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mt: 3,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                {SOCIALS.map((social) => (
                  <IconButton
                    key={social.name}
                    onClick={() => window.open(social.url, '_blank')}
                    sx={{
                      color: 'grey.500',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: (t) => alpha(t.palette.primary.main, 0.08),
                      },
                    }}
                  >
                    <Iconify icon={social.icon} width={24} />
                  </IconButton>
                ))}
              </Stack>
            </m.div>
          </Grid>

          {/* Links Sections */}
          <Grid xs={12} md={8}>
            <Box>
              <Grid container spacing={{ xs: 4, sm: 5 }}>
                {LINKS.map((section) => (
                  <Grid key={section.headline} xs={12} sm={4}>
                    <m.div variants={varFade().inUp}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          mb: 2,
                          color: 'common.white',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          textAlign: { xs: 'center', sm: 'left' },
                        }}
                      >
                        {section.headline}
                      </Typography>

                      <Stack spacing={1.5} sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}>
                        {section.children.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener"
                            color="inherit"
                            variant="body2"
                            sx={{
                              color: 'grey.500',
                              display: 'block',
                              transition: 'all 0.2s',
                              textAlign: { xs: 'center', sm: 'left' },
                              '&:hover': {
                                color: 'primary.main',
                                transform: 'translateX(4px)',
                              },
                            }}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </Stack>
                    </m.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: 'grey.800' }} />

        {/* Bottom Section */}
        <m.div variants={varFade().inUp}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" sx={{ color: 'grey.600' }}>
              © 2025 TEXITcoin. All Rights Reserved.
            </Typography>

            <Stack direction="row" spacing={3}>
              <Link
                href="https://texitcoin.org/"
                target="_blank"
                variant="body2"
                sx={{
                  color: 'grey.600',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="https://texitcoin.org/"
                target="_blank"
                variant="body2"
                sx={{
                  color: 'grey.600',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Terms of Service
              </Link>
            </Stack>
          </Stack>
        </m.div>
      </Container>
    </Box>
  );
}
