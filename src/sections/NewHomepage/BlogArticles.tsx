import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/Image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

type ItemProp = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
};

export function BlogArticles() {
  const list: ItemProp[] = [
    {
      id: '1',
      title: 'Rocketeers Closing',
      subtitle: `Take advantage of BOGO commission before it's gone!`,
      description: `Ending this Saturday, 22 November`,
    },
    {
      id: '2',
      title: 'Christmas Cheer',
      subtitle: 'Join us for the Dallas Holiday Parade',
      description: `Floats, cars, trucks & dancers & a festive parade!`,
    },
    {
      id: '3',
      title: 'Mine Update',
      subtitle: 'Our first Fog Hashing Container comes online',
      description: 'Major progress for the Victoria mine site',
    },
  ];

  const carousel = useCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 8000 })]);

  return (
    <Card sx={{ bgcolor: 'common.black', height: '100%' }}>
      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ top: 16, left: 16, position: 'absolute', color: 'primary.light' }}
      />

      <CarouselArrowBasicButtons
        {...carousel.arrows}
        options={carousel.options}
        sx={{ top: 8, right: 8, position: 'absolute', color: 'common.white' }}
      />

      <Carousel carousel={carousel}>
        {list.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
    </Card>
  );
}

function CarouselItem({ item }: { item: ItemProp }) {
  return (
    <Box sx={{ width: 1, height: '100%', position: 'relative' }}>
      <Box
        sx={{
          p: 3,
          gap: 1,
          width: 1,
          bottom: 0,
          zIndex: 9,
          display: 'flex',
          position: 'absolute',
          color: 'common.white',
          flexDirection: 'column',
        }}
      >
        <Typography variant="overline" color="primary.light">
          {item.title}
        </Typography>

        <Link color="inherit" underline="none" variant="h5">
          {item.subtitle}
        </Link>

        <Typography variant="body2" noWrap>
          {item.description}
        </Typography>
      </Box>

      <Image
        alt={item.title}
        src={`${CONFIG.site.basePath}/assets/background/background-6.webp`}
        slotProps={{
          overlay: {
            background: (theme) =>
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${theme.vars.palette.common.black} 75%)`,
          },
        }}
        sx={{
          width: 1,
          height: { xs: 288, xl: 320 },
        }}
      />
    </Box>
  );
}
