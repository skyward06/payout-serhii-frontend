import { useMemo } from 'react';
import QRCode from 'react-qr-code';
import { useLocation } from 'react-router';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { fNumber } from 'src/utils/formatNumber';
import { truncateMiddle } from 'src/utils/helper';

import { CONFIG } from 'src/config';
import { CHAIN_UNIT, PAYMENT_METHOD } from 'src/consts';
import { PaymentType } from 'src/__generated__/graphql';
import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { Timer } from './Timer';
import { ACHForm } from '../ACH';
import { HelpView } from './Help';
import { useCancelOrder } from './useApollo';

export default function PaymentWaiting() {
  const theme = useTheme();

  const { copy } = useCopyToClipboard();
  const { state } = useLocation();

  const { order: current } = useOrderContext();

  const { cancelOrder } = useCancelOrder();

  const onCopy = async (value: any) => {
    copy(value);
    toast.success('Copied!');
  };

  const ITEMS = useMemo(() => {
    if (!current || !current?.paymentToken) return [];

    const balanceUnit = PAYMENT_METHOD[current?.paymentToken]?.balance || 0;
    const fractionDigits = CHAIN_UNIT[current?.paymentToken];

    const items = [
      {
        label: truncateMiddle(current?.paymentAddress ?? '', 30),
        value: current?.paymentAddress,
        icon: 'entypo:wallet',
        copy: true,
      },
    ];

    if (!current.acceptFirstTx) {
      items.push({
        label: fNumber((current?.requiredBalance ?? 0) / balanceUnit, {
          minimumFractionDigits: fractionDigits,
          maximumFractionDigits: fractionDigits,
        }),
        value: `${(current?.requiredBalance ?? 0) / balanceUnit}`,
        icon: `${CONFIG.site.basePath}/assets/${current?.paymentToken}.png`,
        copy: true,
      });
    }

    if (current?.paidBalance) {
      items.push({
        label: fNumber((current?.paidBalance ?? 0) / balanceUnit, {
          minimumFractionDigits: fractionDigits,
          maximumFractionDigits: fractionDigits,
        }),
        value: `${(current?.paidBalance ?? 0) / balanceUnit}`,
        icon: `${CONFIG.site.basePath}/assets/${current?.paymentToken}.png`,
        copy: false,
      });
    }

    return items;
  }, [current]);

  const handleCancel = async () => {
    try {
      await cancelOrder({ variables: { data: { id: current!.id } } });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  if (current.paymentType === PaymentType.Ach || state?.isHashAch) {
    return <ACHForm amount={Number(current.requiredBalance) / 100} orderId={current.id} />;
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h6">Detail</Typography>
        <Box border={`2px solid ${theme.palette.success.main}`} borderRadius={0.5} p={1}>
          <Timer />
        </Box>
      </Stack>

      <Box>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box sx={{ p: 2, background: '#ffffff' }}>
            <QRCode value={current?.paymentAddress ?? ''} size={256} level="H" />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: theme.palette.background.paper,
              borderRadius: '50%',
              padding: 0.5,
            }}
          >
            <Avatar
              src={`${CONFIG.site.basePath}/assets/${current?.paymentToken}.png`}
              sx={{ width: 50, height: 50 }}
            />
          </Box>
        </Box>

        {ITEMS.map((item, index) => (
          <Box
            sx={{
              mb: 1,
              pr: 1,
              gap: 1,
              display: 'flex',
              borderRadius: 0.5,
              alignItems: 'center',
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                background: theme.palette.primary.main,
              }}
            >
              {index === 0 ? (
                <Iconify
                  icon={item.icon}
                  color="#ffffff"
                  sx={{ display: 'block', margin: 'auto' }}
                />
              ) : (
                <Box
                  sx={{
                    background: theme.palette.background.paper,
                    borderRadius: '50%',
                    padding: 0.25,
                    margin: 'auto',
                  }}
                >
                  <Avatar src={item.icon} sx={{ width: 20, height: 20 }} />
                </Box>
              )}
            </Box>

            <Box sx={{ width: '100%' }}>
              <Typography>{item?.label}</Typography>
            </Box>

            {item.copy ? (
              <Iconify
                icon="bxs:copy"
                sx={{ cursor: 'pointer' }}
                color={theme.palette.primary.main}
                onClick={() => onCopy(item.value)}
              />
            ) : (
              <Typography fontWeight={500}>Paid</Typography>
            )}
          </Box>
        ))}
      </Box>

      <Stack direction="row" justifyContent="flex-end" mt={4}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </Stack>

      <HelpView />
    </>
  );
}
