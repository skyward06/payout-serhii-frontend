import type { PostType } from 'src/libs/Post/type';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/Image';
import { Iconify } from 'src/components/Iconify';

import { getCoverImageUrl } from './utils/getCoverImageUrl';

export function PostView() {
  const posts: PostType[] = [];

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={3} sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              Blog & News
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Explore all articles, updates, and insights from the TEXITcoin community
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid key={post.slug} xs={12} sm={6} md={4}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>

          <Stack alignItems="center" sx={{ pt: 4 }}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Iconify icon="solar:refresh-bold" />}
              sx={{
                borderColor: 'divider',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  borderColor: 'primary.main',
                },
              }}
            >
              Load More Posts
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type PostCardProps = {
  post: PostType;
};

function PostCard({ post }: PostCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Image
        src={getCoverImageUrl(post.coverImage ?? '')}
        alt={post.title}
        ratio="16/9"
        sx={{
          transition: 'transform 0.5s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      />

      <Stack spacing={2} sx={{ p: 3, flexGrow: 1 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {post.metaTags.slice(0, 2).map((tag) => (
            <Chip
              key={tag.slug}
              label={tag.title}
              size="small"
              sx={{
                bgcolor: alpha(theme.palette.primary.main, 0.12),
                color: 'primary.main',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.24),
                },
              }}
            />
          ))}
        </Stack>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.8,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {post.description}
        </Typography>

        <Typography
          variant="body2"
          color="text.disabled"
          sx={{
            lineHeight: 1.6,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {post.content}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          component={RouterLink}
          href={`/post/${post.slug}`}
          variant="text"
          endIcon={<Iconify icon="solar:arrow-right-bold" />}
          sx={{
            alignSelf: 'flex-start',
            px: 0,
            '&:hover': {
              bgcolor: 'transparent',
              '& .MuiButton-endIcon': {
                transform: 'translateX(4px)',
              },
            },
            '& .MuiButton-endIcon': {
              transition: 'transform 0.2s ease-in-out',
            },
          }}
        >
          Read More
        </Button>
      </Stack>
    </Card>
  );
}
