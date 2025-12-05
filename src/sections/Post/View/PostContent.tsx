import type { PostType } from 'src/libs/Post/type';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Markdown } from 'src/components/Markdown';

interface Props {
  post: PostType;
}

export function PostContent({ post }: Props) {
  return (
    <Box pb={5} mx="auto" maxWidth={720} mt={{ xs: 5, md: 10 }} px={{ xs: 2, sm: 3 }}>
      <Typography variant="subtitle1" mb={4}>
        {post.description}
      </Typography>

      <Markdown
        children={decodeURIComponent(
          atob(post.content)
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join('')
        )}
      />

      <Stack
        spacing={3}
        sx={(theme) => ({
          py: 3,
          borderTop: `dashed 1px ${theme.palette.divider}`,
        })}
      >
        <Box gap={1} display="flex" justifyContent="flex-end" flexWrap="wrap">
          {post.metaTags.map((tag) => (
            <Chip key={tag.slug} label={tag.title} variant="soft" color="info" />
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
