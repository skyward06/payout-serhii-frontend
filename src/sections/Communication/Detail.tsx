import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchCampaignMember } from './useApollo';

interface Props {
  open: UseBooleanReturn;
  subject: string;
  id: any;
}

export default function Detail({ open, subject, id }: Props) {
  /* eslint-disable react/no-danger */

  const { campaignMember, fetchCampaignMember } = useFetchCampaignMember();

  useEffect(() => {
    if (id && open.value) {
      fetchCampaignMember({ variables: { data: { id } } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, open]);

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
          <Typography variant="subtitle1">Subject:</Typography>
          <Typography>{subject}</Typography>
        </Stack>

        <div dangerouslySetInnerHTML={{ __html: campaignMember?.body ?? '' }} />
      </ScrollBar>
    </Drawer>
  );
}
