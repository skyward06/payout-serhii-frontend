import type { PostType } from 'src/libs/Post/type';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Image } from 'src/components/Image';
import { Iconify } from 'src/components/Iconify';

import { getCoverImageUrl } from '../utils/getCoverImageUrl';

type PostCardProps = {
  post: PostType;
};

export function PostItem({ post }: PostCardProps) {
  const theme = useTheme();
  const router = useRouter();

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
          overflow="hidden"
          textOverflow="ellipsis"
          sx={{
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

        <Box sx={{ flexGrow: 1 }} />

        <Button
          onClick={() => router.push(paths.pages.post.view(post.slug))}
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
