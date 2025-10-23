import Alert from '@mui/material/Alert';

export function ServerAlert() {
  return (
    <Alert severity="warning" sx={{ mb: 2 }}>
      Our server will be temporarily down for maintenance for 15 minutes, starting at 2:45 AM UTC.
      We appreciate your patience and understanding.
    </Alert>
  );
}
