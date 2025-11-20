import { m } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/Image';
import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type ItemProp = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

const headerPoints: ItemProp[] = [
  {
    id: '1',
    icon: 'lsicon:badge-promotion-outline',
    title: 'Promotion for this month',
    description:
      'Get exclusive deals and special offers! Join now and take advantage of our limited-time promotions with enhanced rewards and bonuses for new members.',
  },
  {
    id: '2',
    icon: 'mdi:calendar-star',
    title: 'Upcoming major event',
    description:
      "Don't miss our biggest event of the year! Network upgrades, community celebrations, and exciting announcements coming soon. Stay tuned for updates.",
  },
  {
    id: '3',
    icon: 'mdi:gift',
    title: 'Your first coin is free',
    description:
      'Start your TEXITcoin journey with a free coin! Sign up today and receive your first TXC completely free - no strings attached. Begin mining immediately.',
  },
  {
    id: '4',
    icon: 'mdi:trophy-award',
    title: 'Miner of the month',
    description:
      'Compete for top honors and exclusive rewards! Our monthly competition recognizes outstanding miners with special prizes, bonuses, and community recognition.',
  },
  {
    id: '5',
    icon: 'mdi:rocket-launch',
    title: 'Rapid Rewards program',
    description:
      'Accelerate your earnings with our tiered rewards system! Unlock bonus multipliers, referral bonuses, and exclusive perks as you level up in the program.',
  },
];

export function NewsArticles() {
  const carousel = useCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 6000 })]);

  return (
    <Box
      py={{ xs: 8, md: 10 }}
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.03)} 0%, ${varAlpha(theme.vars.palette.primary.darkChannel, 0.06)} 100%)`,
      }}
      component={MotionViewport}
    >
      <Box maxWidth={1200} mx="auto" px={{ xs: 2, md: 3 }}>
        <Stack spacing={1} textAlign="center" mb={5}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" fontWeight={700}>
              Key Features & Benefits
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
              Discover what makes TEXITcoin the future of cryptocurrency
            </Typography>
          </m.div>
        </Stack>

        <m.div variants={varFade().inUp}>
          <Card
            sx={{
              bgcolor: 'common.black',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 0,
              boxShadow: (theme) => theme.customShadows.z24,
            }}
          >
            <CarouselDotButtons
              scrollSnaps={carousel.dots.scrollSnaps}
              selectedIndex={carousel.dots.selectedIndex}
              onClickDot={carousel.dots.onClickDot}
              sx={{ top: 16, left: 16, position: 'absolute', color: 'primary.light', zIndex: 9 }}
            />

            <CarouselArrowBasicButtons
              {...carousel.arrows}
              options={carousel.options}
              sx={{ top: 8, right: 8, position: 'absolute', color: 'common.white', zIndex: 9 }}
            />

            <Carousel carousel={carousel}>
              {headerPoints.map((item) => (
                <CarouselItem key={item.id} item={item} />
              ))}
            </Carousel>
          </Card>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.8,
                fontStyle: 'italic',
              }}
            >
              MineTXC is the official and exclusive mining partner of TEXITcoin, a fast, Layer 1
              blockchain built in Texas, by Texans, designed for generations of honest trade.
            </Typography>
          </Box>
        </m.div>
      </Box>
    </Box>
  );
}

function CarouselItem({ item }: { item: ItemProp }) {
  return (
    <Box sx={{ width: 1, position: 'relative' }}>
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          gap: 2,
          width: 1,
          bottom: 0,
          zIndex: 9,
          display: 'flex',
          position: 'absolute',
          color: 'common.white',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Iconify icon={item.icon} width={64} color="primary.main" />

        <Typography variant="h4" fontWeight={700}>
          {item.title}
        </Typography>

        <Typography variant="body1" color="grey.400" maxWidth={600} mx="auto">
          {item.description}
        </Typography>
      </Box>

      <Image
        alt={item.title}
        src={`${CONFIG.site.basePath}/assets/background/background-7.webp`}
        slotProps={{
          overlay: {
            background: (theme) =>
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${theme.vars.palette.common.black} 75%)`,
          },
        }}
        sx={{
          width: 1,
          height: { xs: 300, md: 400 },
        }}
      />
    </Box>
  );
}
