import Typography from '@mui/material/Typography';

interface Props {
  children: React.ReactNode;
}

export function SectionTitle({ children }: Props) {
  return (
    <Typography typography="h5" fontWeight={700} color="text.primary" mb={2}>
      {children}
    </Typography>
  );
}
