import type { PostType } from 'src/libs/Post/type';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha, bgGradient } from 'src/theme/styles';

import { getCoverImageUrl } from '../utils/getCoverImageUrl';

// ----------------------------------------------------------------------

interface Props {
  post: PostType;
}

export function PostHero({ post }: Props) {
  return (
    <Box
      sx={(theme) => ({
        ...bgGradient({
          imgUrl: getCoverImageUrl(post?.coverImage ?? ''),
          color: `0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.64)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.64)}`,
        }),
        height: 400,
        overflow: 'hidden',
      })}
    >
      <Container sx={{ height: 1, position: 'relative' }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            zIndex: 9,
            maxWidth: 480,
            position: 'absolute',
            pt: { xs: 2, md: 8 },
            color: 'common.white',
          }}
        >
          {post.title}
        </Typography>
      </Container>
    </Box>
  );
}
