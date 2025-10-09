import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import { alpha, useTheme } from '@mui/material/styles';

interface Props {
  tableHead: { id: string; label: string; width?: number; sortable?: boolean }[];
}

export function LoadingContent({ tableHead }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} sx={{ px: 2, py: 1 }}>
          {tableHead.map((head, index) => (
            <Skeleton
              key={head.id}
              variant="text"
              sx={{
                width: head.width || 150,
                height: 24,
                borderRadius: 1,
                bgcolor: alpha(theme.palette.grey[300], 0.3),
                animation: 'pulse 1.5s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%': {
                    opacity: 0.6,
                  },
                  '50%': {
                    opacity: 1,
                  },
                  '100%': {
                    opacity: 0.6,
                  },
                },
              }}
            />
          ))}
        </Stack>

        {[...Array(8)].map((_, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              background: alpha(theme.palette.background.paper, 0.6),
              border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              {tableHead.map((head, cellIndex) => (
                <Skeleton
                  key={head.id}
                  variant="rounded"
                  sx={{
                    width: head.width || 150,
                    height: cellIndex === tableHead.length - 1 ? 28 : 20,
                    borderRadius: cellIndex === tableHead.length - 1 ? 2 : 1,
                    bgcolor: alpha(theme.palette.grey[400], 0.2),
                    animation: 'pulse 1.5s ease-in-out infinite',
                    animationDelay: `${index * 0.1}s`,
                  }}
                />
              ))}
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
