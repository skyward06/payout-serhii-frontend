import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  note: string;
}

export function NoteView({ note }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        py: 1,
      }}
    >
      <Typography
        variant="body2"
        color={note ? 'text.primary' : 'text.disabled'}
        fontStyle={note ? 'normal' : 'italic'}
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {note || 'No note'}
      </Typography>
    </Box>
  );
}
