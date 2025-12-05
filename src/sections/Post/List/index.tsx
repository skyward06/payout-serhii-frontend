import type { PostType } from 'src/libs/Post/type';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { Iconify } from 'src/components/Iconify';

import { PostItem } from './Item';
import { useFetchPosts } from '../useApollo';
import { PostSkeleton } from './PostSkeleton';

export function PostView() {
  const [page, setPage] = useState<number>(1);
  const [current, setCurrent] = useState<PostType[]>([]);

  const { loading, posts, fetchPosts } = useFetchPosts();

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchPosts({
      variables: {
        data: {},
        page: `${page},9`,
        sort: '',
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setCurrent((prev) => [...prev, ...posts]);
  }, [posts]);

  return (
    <Box bgcolor="background.default" py={{ xs: 6, md: 8 }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack textAlign="center" spacing={3}>
            <Typography variant="h2" fontWeight={700}>
              Blog & News
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
              Explore all blogs, updates, and insights from the TEXITcoin community
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {loading ? (
              <PostSkeleton />
            ) : (
              current.map((post) => (
                <Grid key={post.slug} xs={12} sm={6} md={4}>
                  <PostItem post={post} />
                </Grid>
              ))
            )}
          </Grid>

          <Stack alignItems="center" pt={4}>
            <LoadingButton
              variant="outlined"
              size="large"
              loading={loading}
              startIcon={<Iconify icon="solar:refresh-bold" />}
              sx={{
                borderColor: 'divider',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  borderColor: 'primary.main',
                },
              }}
              onClick={handleLoadMore}
            >
              Load More Posts
            </LoadingButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
