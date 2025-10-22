import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { useRouter } from 'src/routes/hooks';

import type { CustomDialogProps } from './types';

// ----------------------------------------------------------------------

export function CustomDialog({
  open,
  title,
  route,
  action,
  children,
  ...other
}: CustomDialogProps) {
  const router = useRouter();

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={() => router.push(route)} {...other}>
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>

      {children && <DialogContent sx={{ typography: 'body2' }}> {children} </DialogContent>}
    </Dialog>
  );
}
