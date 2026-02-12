import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { alpha } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/Iconify';

import { ScrollBar } from '../ScrollBar';

const STORAGE_KEY = 'graduation-popup-dismissed';

export function GraduationPopup() {
  const [open, setOpen] = useState(() => localStorage.getItem(STORAGE_KEY) !== 'true');
  const [showAgain, setShowAgain] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    if (showAgain) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    setOpen(false);
  };

  const handleLogin = () => {
    if (showAgain) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    setOpen(false);
    router.push('/sign-in');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #1a1145 0%, #0d0a2a 100%)',
          backgroundImage: 'url(/images/graduation.png)',
          backgroundSize: 'cover',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      }}
    >
      <ScrollBar>
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'grey.400',
              zIndex: 10,
              '&:hover': { color: 'white' },
            }}
          >
            <Iconify icon="mdi:close" width={24} />
          </IconButton>

          <Stack alignItems="center" sx={{ px: { xs: 3, sm: 5 }, pt: 4, pb: 4 }}>
            {/* Logo */}
            <Box
              component="img"
              src="/assets/images/dark-logo.png"
              alt="MineTXC Logo"
              sx={{
                background: (theme) => theme.palette.common.white,
                borderRadius: '50%',
                width: 80,
                height: 80,
                mb: 2,
              }}
            />

            {/* Title */}
            <Typography variant="h3" color="white" textAlign="center" fontWeight={800} mb={0.5}>
              🎉 WE&apos;RE ALL GRADUATED! 🎉
            </Typography>

            {/* Subtitle */}
            <Typography variant="h6" color="#d4a843" fontStyle="italic" textAlign="center" mb={3}>
              &quot;98 Weeks Strong.&quot;
            </Typography>

            {/* Body Text */}
            <Stack spacing={1.5} maxWidth={400}>
              <Typography variant="subtitle1" fontWeight={700} color="white">
                Dear Miners, Affiliates, Networkers &amp; Friends:
              </Typography>

              <Typography variant="body1" color="grey.300" lineHeight={1.7}>
                Pursuant to Texas State Securities Board Order No. ENF-26-CDO-1893, mineTXC is no
                longer accepting new Miners or the acquisition of additional hash power by existing
                Miners.
              </Typography>

              <Typography variant="body1" color="grey.300" lineHeight={1.7}>
                Tune in on our social media channels to stay up to date on the latest developments.
              </Typography>

              <Typography variant="body1" color="grey.300" lineHeight={1.7}>
                Existing Miners can log in and manage your account below.
              </Typography>

              {/* Bobby signature */}
              <Box>
                <Typography variant="subtitle1" color="white" fontStyle="italic" fontWeight={700}>
                  Thank you for 98 Weeks of fun, profit &amp; friendship.
                </Typography>
                <Typography variant="h6" color="white" fontStyle="italic" textAlign="right" mt={1}>
                  – Bobby
                </Typography>
              </Box>
            </Stack>

            {/* CTA Buttons */}
            <Stack spacing={1.5} width="100%" maxWidth={320} mt={4}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleLogin}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  fontWeight: 700,
                  letterSpacing: 1,
                  py: 1.2,
                  '&:hover': {
                    borderColor: '#d4a843',
                    color: '#d4a843',
                    bgcolor: alpha('#d4a843', 0.08),
                  },
                }}
              >
                LOGIN TO YOUR ACCOUNT
              </Button>

              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  window.open('https://www.instagram.com/texitcoin/', '_blank');
                }}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  fontWeight: 700,
                  letterSpacing: 1,
                  py: 1.2,
                  '&:hover': {
                    borderColor: '#d4a843',
                    color: '#d4a843',
                    bgcolor: alpha('#d4a843', 0.08),
                  },
                }}
              >
                FOLLOW OUR SOCIAL CHANNELS
              </Button>
            </Stack>

            {/* Don't show again */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={showAgain}
                  onChange={(e) => setShowAgain(e.target.checked)}
                  sx={{
                    color: 'grey.500',
                    '&.Mui-checked': { color: '#d4a843' },
                  }}
                />
              }
              label="Don't show this again"
              sx={{ mt: 2, color: 'grey.400' }}
            />

            {/* Compliance footer */}
            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 2, opacity: 0.7 }}>
              <Iconify icon="mdi:shield-check" width={16} sx={{ color: '#d4a843' }} />
              <Typography variant="caption" color="#d4a843" fontWeight={700} letterSpacing={1}>
                COMPLIANCE MODE ACTIVATED
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
      </ScrollBar>
    </Dialog>
  );
}
