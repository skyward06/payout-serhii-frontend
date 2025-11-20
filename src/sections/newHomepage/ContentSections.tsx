import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const SECTIONS = [
  {
    id: '1',
    title: 'The Mine',
    subtitle: 'Our goal is 35 sites, 35 megawatts of power - monitor our progress',
    icon: 'mdi:factory',
    color: '#FF6B6B',
    link: '#',
  },
  {
    id: '2',
    title: 'The Story',
    subtitle:
      'We have a moral obligation to share the message of peace and prosperity with everyone',
    icon: 'mdi:book-open-page-variant',
    color: '#4ECDC4',
    link: '#',
  },
  {
    id: '3',
    title: 'Our Community',
    subtitle: 'Help us grow, vote with your wallet, and be the change you want to see in the world',
    icon: 'mdi:account-group',
    color: '#95E1D3',
    link: '#',
  },
];

// ----------------------------------------------------------------------

export function ContentSections() {
  return (
    <Box
      py={{ xs: 8, md: 10 }}
      sx={{
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.neutral} 100%)`,
      }}
    >
      <Container component={MotionViewport}>
        <Stack spacing={8}>
          <m.div variants={varFade().inDown}>
            <Typography
              variant="h5"
              textAlign="center"
              color="text.secondary"
              maxWidth={900}
              mx="auto"
              fontWeight={500}
              lineHeight={1.8}
            >
              Our mission transcends the simple task of building and managing the world&apos;s
              largest, privately owned mine: we&apos;re also creating a community of passionate
              individuals that have a vested interest in our growth and continued success, and
              sharing our story across the globe. Keep tabs on how we&apos;re doing:
            </Typography>
          </m.div>

          <Stack spacing={6}>
            {SECTIONS.map((section, index) => {
              const isEven = index % 2 === 0;

              return (
                <m.div key={section.id} variants={varFade().inUp}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
                      alignItems: 'center',
                      gap: { xs: 4, md: 6 },
                      p: { xs: 3, md: 5 },
                      borderRadius: 4,
                      bgcolor: 'background.paper',
                      border: `2px solid ${alpha(section.color, 0.2)}`,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: section.color,
                        boxShadow: `0 8px 24px ${alpha(section.color, 0.12)}`,
                        '& .section-number': {
                          color: section.color,
                          transform: 'scale(1.1)',
                        },
                        '& .section-icon-wrapper': {
                          transform: 'rotate(360deg) scale(1.05)',
                        },
                        '& .section-arrow': {
                          transform: 'translateX(8px)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        [isEven ? 'right' : 'left']: 0,
                        width: { xs: '100%', md: '50%' },
                        height: '100%',
                        background: `linear-gradient(${isEven ? '90deg' : '-90deg'}, ${alpha(section.color, 0.03)} 0%, transparent 100%)`,
                        pointerEvents: 'none',
                      }}
                    />

                    <Box position="relative" flexShrink={0}>
                      <Box
                        className="section-icon-wrapper"
                        sx={{
                          width: { xs: 100, md: 140 },
                          height: { xs: 100, md: 140 },
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${alpha(section.color, 0.15)} 0%, ${alpha(section.color, 0.05)} 100%)`,
                          border: `3px solid ${alpha(section.color, 0.3)}`,
                          position: 'relative',
                          transition: 'transform 0.6s ease',
                        }}
                      >
                        <Iconify
                          icon={section.icon}
                          width={64}
                          sx={{ color: section.color, width: { xs: 48, md: 64 } }}
                        />

                        <Box
                          className="section-number"
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            bgcolor: section.color,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '1.25rem',
                            boxShadow: `0 4px 12px ${alpha(section.color, 0.4)}`,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {index + 1}
                        </Box>
                      </Box>
                    </Box>

                    <Stack spacing={2.5} flex={1} position="relative">
                      <Typography variant="h3" fontWeight={700}>
                        {section.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        lineHeight={1.8}
                        maxWidth={600}
                      >
                        {section.subtitle}
                      </Typography>

                      <Box pt={1}>
                        <Button
                          component={RouterLink}
                          href={section.link}
                          variant="text"
                          size="large"
                          endIcon={
                            <Iconify
                              icon="eva:arrow-forward-fill"
                              className="section-arrow"
                              sx={{ transition: 'transform 0.3s ease' }}
                            />
                          }
                          sx={{
                            color: section.color,
                            fontWeight: 600,
                            fontSize: '1rem',
                            px: 0,
                            '&:hover': {
                              bgcolor: 'transparent',
                              color: section.color,
                            },
                          }}
                        >
                          Link to sub-page
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </m.div>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
