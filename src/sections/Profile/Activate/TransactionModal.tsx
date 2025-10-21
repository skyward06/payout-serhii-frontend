import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';

import { truncateMiddle } from 'src/utils/helper';

import { Iconify } from 'src/components/Iconify';

interface Props {
  open: UseBooleanReturn;
  txHash?: string;
}

export function TransactionModal({ open, txHash }: Props) {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Dialog open={open.value} fullWidth maxWidth="xs" onClose={open.onFalse}>
      <DialogTitle>Transaction Details</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography variant="body2" color="text.secondary">
            Your missed reward transaction is being processed.
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            border="1px solid divider"
            bgcolor="background.neutral"
            borderRadius={0.5}
            gap={1}
            p={1}
          >
            <Typography variant="body2">{truncateMiddle(txHash, smUp ? 40 : 25, false)}</Typography>
            <Iconify icon="bxs:copy" cursor="pointer" color="primary.main" width={18} height={18} />
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={open.onFalse}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
