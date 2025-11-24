import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const NEWS_ITEMS = [
  {
    id: '1',
    title: `What You Missed in Tuesday's Call`,
    link: '#',
  },
  {
    id: '2',
    title: 'Education Resources',
    link: '#',
  },
  {
    id: '3',
    title: 'Instagram Embed',
    link: '#',
  },
  {
    id: '4',
    title: 'X Embed',
    link: '#',
  },
  {
    id: '5',
    title: 'TikTok embed',
    link: '#',
  },
];

// ----------------------------------------------------------------------

export function LatestNews() {
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
        <Stack spacing={4}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h3" fontWeight={700}>
              Latest News
            </Typography>
          </m.div>

          <Stack spacing={2}>
            {NEWS_ITEMS.map((item) => (
              <m.div key={item.id} variants={varFade().inUp}>
                <Link
                  href={item.link}
                  underline="none"
                  sx={{
                    display: 'block',
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: (theme) => `0 8px 24px ${alpha(theme.palette.grey[500], 0.12)}`,
                      borderColor: 'primary.main',
                      '& .news-icon': {
                        transform: 'translateX(4px)',
                        color: 'primary.main',
                      },
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" fontWeight={600} color="text.primary">
                      {item.title}
                    </Typography>
                    <Iconify
                      icon="eva:arrow-forward-fill"
                      className="news-icon"
                      width={24}
                      sx={{
                        color: 'text.secondary',
                        transition: 'all 0.3s ease-in-out',
                      }}
                    />
                  </Stack>
                </Link>
              </m.div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
