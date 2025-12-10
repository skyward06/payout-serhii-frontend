import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useRouter } from 'src/routes/hooks';

import { PaymentType } from 'src/__generated__/graphql';
import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import PaymentSelector from './PaymentSelector';
import { useCancelOrder, useSetOrderPayment } from './useApollo';

export function PaymentTypeSelector() {
  const theme = useTheme();
  const router = useRouter();
  const [type, setType] = useState<string>();
  const [step, setStep] = useState<number>(0);

  const { order } = useOrderContext();
  const { loading: canceling, cancelOrder } = useCancelOrder();
  const { loading, setOrderPayment } = useSetOrderPayment();

  const PAYMENT_TYPES: any[] = useMemo(() => {
    const baseTypes = [
      {
        label: 'Crypto',
        icon: 'material-symbols:token-outline-rounded',
      },
    ];

    if (order.availablePaymentMethods.map((item) => item.paymentType).includes(PaymentType.Ach)) {
      baseTypes.push({ label: 'Ach', icon: 'ant-design:bank-filled' });
    }

    return baseTypes;
  }, [order]);

  const handleNext = async () => {
    if (type === 'Ach') {
      const { data } = await setOrderPayment({
        variables: { data: { id: order.id, paymentType: PaymentType.Ach } },
      });

      if (!loading && data?.setOrderPayment.id) {
        router.push('waiting', { state: { isHashAch: true } });
      }
    } else {
      setStep(1);
    }
  };

  const handleCancel = async () => {
    try {
      await cancelOrder({ variables: { data: { id: order.id } } });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  if (order.paymentType === PaymentType.Crypto) {
    return <PaymentSelector />;
  }

  if (order.paymentType === PaymentType.Ach) {
    router.push('waiting');
  }

  return (
    <>
      {step === 0 ? (
        <Stack spacing={5} mt={5}>
          <Box sx={{ backgroundColor: 'background.neutral', borderRadius: 1, px: 2 }}>
            {PAYMENT_TYPES.map((payment) => (
              <Box
                key={payment.label}
                sx={{
                  p: 1,
                  my: 2,
                  border: `1px solid ${theme.palette.background.default}`,
                  borderRadius: 1,
                  backgroundColor: theme.palette.background.default,
                  cursor: 'pointer',
                  transition: 'border 0.2s ease 0.1s',
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                onClick={() => {
                  setType(payment.label);
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon={payment.icon} width={42} color={theme.palette.primary.main} />
                  <Typography fontWeight={500}>{payment.label}</Typography>
                </Stack>

                <Iconify
                  icon="uim:check-circle"
                  color={theme.palette.success.main}
                  sx={{
                    ...(type !== payment.label && { opacity: 0 }),
                    transition: 'opacity 0.2s ease 0.1s',
                  }}
                />
              </Box>
            ))}
          </Box>

          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <LoadingButton variant="outlined" loading={canceling} onClick={handleCancel}>
              Cancel
            </LoadingButton>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </Stack>
        </Stack>
      ) : (
        <PaymentSelector />
      )}
    </>
  );
}
