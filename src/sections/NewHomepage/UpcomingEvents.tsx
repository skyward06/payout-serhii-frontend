import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const EVENTS = [
  {
    id: '1',
    location: 'Dallas',
    icon: 'mdi:map-marker',
    color: '#FF6B6B',
    date: 'November 13-14, 2025',
  },
  {
    id: '2',
    location: 'SoCal',
    icon: 'mdi:map-marker',
    color: '#4ECDC4',
    date: 'November 19-20, 2025',
  },
  {
    id: '3',
    location: 'Florida',
    icon: 'mdi:map-marker',
    color: '#95E1D3',
    date: 'November 28, 2025',
  },
];

// ----------------------------------------------------------------------

export function UpcomingEvents() {
  return (
    <Box
      py={{ xs: 8, md: 10 }}
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(
            theme.palette.primary.dark,
            0.08
          )} 100%)`,
      }}
    >
      <Container component={MotionViewport}>
        <Stack spacing={5}>
          <Stack spacing={2} textAlign="center">
            <m.div variants={varFade().inDown}>
              <Typography variant="h2" fontWeight={700}>
                Upcoming Events
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
                Meet fellow TEXITcoin members and learn more about mining opportunities at our
                upcoming events across the country.
              </Typography>
            </m.div>
          </Stack>

          <Grid container spacing={3}>
            {EVENTS.map((event) => (
              <Grid item xs={12} md={4} key={event.id}>
                <m.div variants={varFade().inUp}>
                  <Box
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: (theme) => `0 20px 40px ${alpha(theme.palette.grey[500], 0.16)}`,
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <Stack spacing={3} alignItems="center" textAlign="center">
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: alpha(event.color, 0.12),
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        <Iconify icon={event.icon} width={40} sx={{ color: event.color }} />
                      </Box>

                      <Stack spacing={1}>
                        <Typography variant="h4" fontWeight={700}>
                          {event.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontWeight={500}>
                          {event.date}
                        </Typography>
                      </Stack>

                      <Typography variant="body2" color="text.secondary" sx={{ minHeight: 40 }}>
                        Join us for an exciting event to connect with the TEXITcoin community
                      </Typography>
                    </Stack>
                  </Box>
                </m.div>
              </Grid>
            ))}
          </Grid>

          <m.div variants={varFade().inUp}>
            <Stack alignItems="center" pt={2}>
              <Button
                component={Link}
                variant="outlined"
                size="large"
                endIcon={<Iconify icon="eva:arrow-forward-fill" />}
                onClick={() => window.open(paths.event.root, '_blank')}
              >
                Check out the full event calendar
              </Button>
            </Stack>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}
