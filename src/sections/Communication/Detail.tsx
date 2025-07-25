import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import Stack from '@mui/material/Stack';
import { Skeleton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchCampaignMember } from './useApollo';

interface Props {
  open: UseBooleanReturn;
  id: any;
}

export function CommunicationDetail({ open, id }: Props) {
  /* eslint-disable react/no-danger */

  const { loading, campaignMember } = useFetchCampaignMember(id);

  return (
    <Drawer
      open={open.value}
      onClose={() => open.onFalse()}
      anchor="right"
      slotProps={{ backdrop: { invisible: true } }}
      PaperProps={{ sx: { width: 600 } }}
    >
      <ScrollBar
        sx={{
          borderRadius: 1,
          px: 2,
        }}
      >
        <Stack direction="row" sx={{ py: 2 }} spacing={2}>
          <Typography variant="subtitle1">Subject</Typography>
          {loading ? <Skeleton width="100%" /> : <Typography>{campaignMember?.subject}</Typography>}
        </Stack>

        {loading ? (
          <Skeleton />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: campaignMember?.body ?? '' }} />
        )}
      </ScrollBar>
    </Drawer>
  );
}
