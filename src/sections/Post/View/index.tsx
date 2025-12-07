import type { PostType } from 'src/libs/Post/type';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/Iconify';

import { PostHero } from './PostHero';
import { PostContent } from './PostContent';

interface Props {
  post: PostType;
}

export function PostView({ post }: Props) {
  const router = useRouter();

  return (
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      <Stack direction="row" justifyContent="flex-end" mb={2}>
        <Button
          variant="outlined"
          startIcon={<Iconify icon="famicons:arrow-back" />}
          onClick={() => router.push(paths.pages.post.root)}
        >
          Go to Blog
        </Button>
      </Stack>

      <PostHero post={post} />

      <PostContent post={post} />
    </Container>
  );
}
