import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { truncateMiddle } from 'src/utils/helper';

import { COUNTRY, TXC_WALLET } from 'src/consts';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import { Schema, type SchemaType } from './schema';
import { useActivateMember } from '../Profile/useApollo';
import { TransactionModal } from '../Profile/Activate/TransactionModal';

export function ActivationView() {
  const theme = useTheme();
  const router = useRouter();
  const transactionOpen = useBoolean();
  const [txHash, setTxHash] = useState<string>();

  const { user } = useAuthContext();
  const { loading, activateMember } = useActivateMember();

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues: { assetId: '' },
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (newData) => {
    try {
      const { data } = await activateMember(newData);

      if (data) {
        toast.success('Your account has been activated successfully!');

        if (data?.activateMember.activationTx) {
          transactionOpen.onTrue();
          setTxHash(data.activateMember.activationTx);
        } else {
          router.push(paths.dashboard.profile.root);
        }

        reset();
      }
    } catch (error) {
      if (error.message === 'Invalid asset address') {
        toast.error(
          'Please enter the correct Coin ID. If it’s different from the one on your profile, kindly submit a ticket for assistance.'
        );
      }
    }
  });

  const handleActivate = async () => {
    try {
      const { data } = await activateMember({});

      if (data) {
        toast.success('Your account has been activated successfully!');

        if (data?.activateMember.activationTx) {
          transactionOpen.onTrue();
          setTxHash(data.activateMember.activationTx);
        } else {
          router.push(paths.dashboard.profile.root);
        }

        reset();
      }
    } catch (error) {
      if (error.message === 'Invalid asset address') {
        toast.error(
          'Please enter the correct Coin ID. If it’s different from the one on your profile, kindly submit a ticket for assistance.'
        );
      }
    }
  };

  return (
    <>
      <Box py={1} pb={3}>
        <Stack spacing={3}>
          {user?.country === COUNTRY.USA ? (
            <Form methods={methods} onSubmit={onSubmit}>
              <Field.Text
                name="assetId"
                label="Coin ID"
                placeholder="Input your Coin ID"
                disabled={user?.activated}
              />
            </Form>
          ) : (
            <Typography>
              Do you really want to activate your account with follow addresses?
            </Typography>
          )}

          <Stack spacing={1}>
            <Typography variant="subtitle2">Current wallet address</Typography>
            {user?.memberWallets
              ?.filter(
                (wallet) =>
                  TXC_WALLET.findIndex((txcWallet) => txcWallet.id === wallet.payoutId) !== -1
              )
              .map((wallet) => (
                <Box
                  p={1}
                  borderRadius={1}
                  border={`1px solid ${alpha(theme.palette.grey[500], 0.12)}`}
                  bgcolor={alpha(theme.palette.grey[500], 0.04)}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="caption">
                    {truncateMiddle(wallet.address, 30, true)}
                  </Typography>
                  <Iconify icon="bxs:copy" color="primary.main" />
                </Box>
              ))}
          </Stack>

          <Stack direction="row" justifyContent="flex-end" spacing={3}>
            <LoadingButton
              type="submit"
              color="primary"
              variant="contained"
              onClick={user?.country === COUNTRY.USA ? onSubmit : handleActivate}
              loading={loading}
              disabled={user?.activated}
            >
              Activate
            </LoadingButton>
            <Button
              variant="outlined"
              onClick={() =>
                router.push(paths.dashboard.profile.root, { state: { isModal: true } })
              }
            >
              {user?.activated ? 'Close' : 'Cancel'}
            </Button>
          </Stack>
        </Stack>
      </Box>

      <TransactionModal open={transactionOpen} txHash={txHash} />
    </>
  );
}
