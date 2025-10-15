import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';
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
      onClose={open.onFalse}
      anchor="right"
      slotProps={{ backdrop: { invisible: true } }}
      PaperProps={{ sx: { width: { xs: 390, sm: 600 } } }}
    >
      <ScrollBar
        sx={{
          borderRadius: 1,
          px: 2,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          py={2}
        >
          <Stack direction="row" spacing={2}>
            <Typography variant="subtitle1">Subject</Typography>
            {loading ? (
              <Skeleton width="100%" />
            ) : (
              <Typography>{campaignMember?.subject}</Typography>
            )}
          </Stack>

          <Box>
            <IconButton
              sx={{ bgcolor: 'action.hover', '&:hover': { bgcolor: 'action.selected' } }}
              onClick={open.onFalse}
            >
              <Iconify icon="uil:times" />
            </IconButton>
          </Box>
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
