import type { ICalendarEvent } from 'src/types/calendar';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Divider, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';

import { formatDateTime } from 'src/utils/format-time';

import { Label } from 'src/components/Label';
import { ScrollBar } from 'src/components/ScrollBar';

type Props = {
  onClose: () => void;
  currentEvent?: ICalendarEvent;
};

export function CalendarForm({ currentEvent, onClose }: Props) {
  return (
    <>
      <ScrollBar sx={{ p: 3, bgcolor: 'background.neutral' }}>
        <Stack spacing={2}>
          <Stack spacing={1}>
            <Divider textAlign="left">
              <Typography variant="subtitle2" color="text.disabled">
                Title
              </Typography>
            </Divider>

            <Box typography="body2" px={2}>
              {currentEvent?.title}
            </Box>
          </Stack>

          <Stack spacing={1}>
            <Divider textAlign="left">
              <Typography variant="subtitle2" color="text.disabled">
                Description
              </Typography>
            </Divider>

            <Box typography="body2" px={2} sx={{ wordBreak: 'break-word' }}>
              {currentEvent?.description}
            </Box>
          </Stack>

          <Stack spacing={1}>
            <Divider textAlign="left">
              <Typography variant="subtitle2" color="text.disabled">
                Region
              </Typography>
            </Divider>

            <Box typography="body2" px={2} sx={{ wordBreak: 'break-word' }}>
              {currentEvent?.region}
            </Box>
          </Stack>

          <Stack spacing={1}>
            <Divider textAlign="left">
              <Typography variant="subtitle2" color="text.disabled">
                Start Date
              </Typography>
            </Divider>

            <Box typography="body2" px={2} sx={{ wordBreak: 'break-word' }}>
              {formatDateTime(`${currentEvent?.start}`, 'MM/DD/YYYY hh:mm a')}
            </Box>
          </Stack>

          <Stack spacing={1}>
            <Divider textAlign="left">
              <Typography variant="subtitle2" color="text.disabled">
                End Date
              </Typography>
            </Divider>

            <Box typography="body2" px={2} sx={{ wordBreak: 'break-word' }}>
              {formatDateTime(`${currentEvent?.start}`, 'MM/DD/YYYY hh:mm a')}
            </Box>
          </Stack>

          {currentEvent?.allDay && (
            <Box textAlign="right">
              <Label variant="soft" color="primary">
                All day
              </Label>
            </Box>
          )}
        </Stack>
      </ScrollBar>

      <DialogActions sx={{ flexShrink: 0 }}>
        <Box sx={{ flexGrow: 1 }} />

        <Button variant="outlined" color="inherit" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </>
  );
}
