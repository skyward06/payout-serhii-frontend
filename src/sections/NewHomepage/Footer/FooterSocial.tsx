import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/Iconify';
import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'TikTok', icon: 'mage:tiktok-circle', url: 'https://www.tiktok.com/@TEXITcoins' },
  { name: 'Telegram', icon: 'logos:telegram', url: 'https://t.me/texitcoin_txc' },
  { name: 'Instagram', icon: 'skill-icons:instagram', url: 'https://www.instagram.com/texitcoin/' },
  { name: 'Twitter', icon: 'skill-icons:twitter', url: 'https://x.com/TEXITcoin' },
];

// ----------------------------------------------------------------------

export function FooterSocial() {
  return (
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
  );
}
