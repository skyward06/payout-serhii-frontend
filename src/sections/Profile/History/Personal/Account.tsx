import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { truncateMiddle } from 'src/utils/helper';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { LabelRenderer } from 'src/components/ItemRenderers';

import { useAuthContext } from 'src/auth/hooks';

import { InfoItem } from './InfoItem';

export function AccountInfo() {
  const theme = useTheme();
  const { user } = useAuthContext();
  const { copy } = useCopyToClipboard();

  const handleCopy = async (addressValue: string) => {
    try {
      if (addressValue) {
        copy(addressValue);
        toast.success('Copied!');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Account Details
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:wallet-bold-duotone"
            label="TXC Coin ID"
            value={user?.assetId}
            color="warning"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:wallet-bold-duotone"
            label="ETH Coin ID"
            value={user?.ethAssetId}
            color="warning"
          />
        </Grid>

        {user?.peerETHAddress && (
          <Grid xs={12}>
            <Stack spacing={1.5}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  width={32}
                  height={32}
                  display="flex"
                  borderRadius={1}
                  alignItems="center"
                  justifyContent="center"
                  bgcolor={alpha(theme.palette.info.main, 0.08)}
                >
                  <Iconify icon="solar:link-bold-duotone" width={18} color="warning.main" />
                </Box>
                <Typography variant="caption" color="text.secondary" fontWeight={600}>
                  Peer Address
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} pl={5}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'monospace',
                    color: 'text.primary',
                    wordBreak: 'break-all',
                  }}
                >
                  {truncateMiddle(user?.peerETHAddress ?? '', 50)}
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => handleCopy(user?.peerETHAddress ?? '')}
                  color="default"
                >
                  <Iconify icon="solar:copy-bold" width={20} />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        )}

        {user?.peerAcceptable && (
          <Grid xs={12} md={6}>
            <InfoItem
              icon="solar:code-bold-duotone"
              label="Peer Code"
              value={user.peerCode}
              color="warning"
            />
          </Grid>
        )}

        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:dollar-bold-duotone"
            label="Commission Default"
            value={user?.commissionDefault}
            color="success"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem
            icon="solar:cart-check-bold-duotone"
            label="Purchase Limit"
            value={user?.orderedAvailablePoint}
            color="success"
          />
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={1.5}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                width={32}
                height={32}
                display="flex"
                borderRadius={1}
                alignItems="center"
                justifyContent="center"
                bgcolor={alpha(theme.palette.info.main, 0.08)}
              >
                <Iconify icon="solar:money-bag-bold-duotone" width={18} color="success.main" />
              </Box>
              <Typography variant="caption" color="text.secondary" fontWeight={600}>
                Reimbursement
              </Typography>
            </Stack>
            <Box pl={5}>
              <LabelRenderer
                icon={
                  user?.reimbursementEnabled ? 'solar:check-circle-bold' : 'solar:close-circle-bold'
                }
                color={user?.reimbursementEnabled ? 'success' : 'error'}
                value={user?.reimbursementEnabled ? 'Enabled' : 'Disabled'}
              />
            </Box>
          </Stack>
        </Grid>
        <Grid xs={12} md={6}>
          <Stack spacing={1.5}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                width={32}
                height={32}
                display="flex"
                borderRadius={1}
                alignItems="center"
                justifyContent="center"
                bgcolor={alpha(theme.palette.info.main, 0.08)}
              >
                <Iconify icon="solar:money-bag-bold-duotone" width={18} color="success.main" />
              </Box>
              <Typography variant="caption" color="text.secondary" fontWeight={600}>
                Rapid Reward
              </Typography>
            </Stack>
            <Box pl={5}>
              <LabelRenderer
                icon={user?.isRapidReward ? 'solar:check-circle-bold' : 'solar:close-circle-bold'}
                color={user?.isRapidReward ? 'success' : 'error'}
                value={user?.isRapidReward ? 'Enabled' : 'Disabled'}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
