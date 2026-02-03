import Typography from '@mui/material/Typography';

interface Props {
  children: React.ReactNode;
}

export function SectionText({ children }: Props) {
  return (
    <Typography textAlign="center" lineHeight={2} color="text.secondary">
      {children}
    </Typography>
  );
}
