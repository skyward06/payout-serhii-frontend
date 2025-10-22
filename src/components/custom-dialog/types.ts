import type { DialogProps } from '@mui/material/Dialog';

// ----------------------------------------------------------------------

export type ConfirmDialogProps = Omit<DialogProps, 'title' | 'content'> & {
  onClose: () => void;
  title: React.ReactNode;
  action: React.ReactNode;
  content?: React.ReactNode;
};

export type CustomDialogProps = Omit<DialogProps, 'title'> & {
  title: React.ReactNode;
  route: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
};
