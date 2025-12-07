import type { PostType } from 'src/libs/Post/type';

import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/Image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { useFetchPosts } from '../Post/useApollo';
import { getCoverImageUrl } from '../Post/utils/getCoverImageUrl';

export function BlogArticles() {
  const carousel = useCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 8000 })]);

  const { loading, posts, fetchPosts } = useFetchPosts();

  useEffect(() => {
    fetchPosts({
      variables: {
        data: {},
        page: `1,3`,
        sort: '',
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" height={320} />
      ) : (
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
            {posts.map((post) => (
              <CarouselItem key={post.slug} item={post} />
            ))}
          </Carousel>
        </Card>
      )}
    </>
  );
}

function CarouselItem({ item }: { item: PostType }) {
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
        <Link variant="h6" color="primary.light" href={`/post/${item.slug}`}>
          {item.title}
        </Link>

        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {item.description}
        </Typography>

        {/* <Typography
          variant="body2"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {item.content}
        </Typography> */}
      </Box>

      <Image
        alt={item.title}
        src={getCoverImageUrl(item.coverImage ?? '')}
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
