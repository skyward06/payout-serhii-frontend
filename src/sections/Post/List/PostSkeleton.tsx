import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Unstable_Grid2';

// ----------------------------------------------------------------------

export function PostSkeleton() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <Grid key={index} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Skeleton
              variant="rectangular"
              sx={{
                width: '100%',
                paddingTop: '56.25%',
              }}
            />

            <Stack spacing={2} sx={{ p: 3, flexGrow: 1 }}>
              <Stack direction="row" spacing={1}>
                <Skeleton variant="rounded" width={80} height={20} />
                <Skeleton variant="rounded" width={90} height={20} />
              </Stack>

              <Box>
                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
              </Box>

              <Box>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" sx={{ width: '60%' }} />
              </Box>

              <Box sx={{ flexGrow: 1 }} />

              <Skeleton variant="rounded" width={120} height={36} />
            </Stack>
          </Card>
        </Grid>
      ))}
    </>
  );
}
