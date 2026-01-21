import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';

const TIPS = [
  {
    icon: 'solar:wallet-money-bold-duotone',
    title: 'Minimum Amount',
    text: '$30 minimum deposit required',
  },
  {
    icon: 'solar:chart-2-bold-duotone',
    title: 'Convenience Fee',
    text: 'Includes 5% convenience fee',
  },
  {
    icon: 'solar:shield-check-bold-duotone',
    title: 'Secure Process',
    text: 'All transactions are encrypted and secure',
  },
  {
    icon: 'solar:chat-round-call-bold-duotone',
    title: 'Need Help?',
    text: 'Submit a ticket',
  },
] as const;

export function Helper() {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: (theme) => theme.customShadows.z8,
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Iconify icon="solar:info-circle-bold-duotone" width={24} color="info.main" />
          <Typography variant="subtitle1" fontWeight={700}>
            Important Information
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={2}>
          {TIPS.map((tip, index) => (
            <Stack key={index} direction="row" spacing={2}>
              <Box
                width={40}
                height={40}
                flexShrink={0}
                borderRadius={1.5}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="primary.main"
                bgcolor={(theme) => theme.palette.primary.lighter}
              >
                <Iconify icon={tip.icon} width={24} />
              </Box>
              <Box>
                <Typography variant="subtitle2" fontWeight={600} mb={0.5}>
                  {tip.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tip.text}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
