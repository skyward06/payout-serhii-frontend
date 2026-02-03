import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';

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

// ----------------------------------------------------------------------

export function FooterLinks() {
  return (
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
  );
}
