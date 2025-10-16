import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchTopRecruiters } from '../useApollo';
import { Header, ItemRow, LoadingContent } from './components';

export function TopRecruiters() {
  const { loading, topRecruiters } = useFetchTopRecruiters();

  return (
    <Card sx={{ height: '100%' }}>
      <Header title="Top Recruiters" subTitle="Elite contributors ranked by total introducers" />

      <Divider sx={{ opacity: 0.3 }} />

      <ScrollBar sx={{ p: 2 }}>
        {loading ? (
          <LoadingContent />
        ) : (
          <Stack spacing={0.7}>
            {topRecruiters.map((item, i) => (
              <ItemRow index={i} item={item} description="Total introducers" />
            ))}
          </Stack>
        )}
      </ScrollBar>
    </Card>
  );
}
