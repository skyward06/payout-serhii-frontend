import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchTopEarners } from '../useApollo';
import { Header, ItemRow, LoadingContent } from './components';

export function TopEarners() {
  const { loading, topEarners } = useFetchTopEarners();

  return (
    <Card sx={{ height: '100%' }}>
      <Header title="Top Earners" subTitle="Elite contributors ranked by rewards" />

      <Divider sx={{ opacity: 0.3 }} />

      <ScrollBar sx={{ p: 2 }}>
        {loading ? (
          <LoadingContent />
        ) : (
          <Stack spacing={0.7}>
            {topEarners.map((item, i) => (
              <ItemRow index={i} item={item} description="Total earned reward" isUnit />
            ))}
          </Stack>
        )}
      </ScrollBar>
    </Card>
  );
}
