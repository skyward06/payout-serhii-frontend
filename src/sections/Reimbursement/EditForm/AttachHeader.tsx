import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/Iconify';

export function AttachHeader() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 3,
        background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.08)} 0%, ${alpha(theme.palette.secondary.dark, 0.08)} 100%)`,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Box
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            borderRadius: 1,
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
            boxShadow: `0 8px 16px 0 ${alpha(theme.palette.secondary.main, 0.24)}`,
          }}
        >
          <Iconify icon="solar:paperclip-bold-duotone" width={20} color="common.white" />
        </Box>
        <Box>
          <Typography variant="subtitle1">Attachments</Typography>
          <Typography variant="caption" color="text.secondary">
            Upload supporting documents
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
