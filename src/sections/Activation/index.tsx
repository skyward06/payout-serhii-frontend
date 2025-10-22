import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import { Schema, type SchemaType } from './schema';
import { useActivateMember } from '../Profile/useApollo';
import { TransactionModal } from '../Profile/Activate/TransactionModal';

export function ActivationView() {
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
        router.push(paths.dashboard.profile.root);

        if (data?.activateMember.activationTx) {
          transactionOpen.onTrue();
          setTxHash(data.activateMember.activationTx);
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

  return (
    <>
      <Box py={1} pb={3}>
        <Stack spacing={3}>
          <Form methods={methods} onSubmit={onSubmit}>
            <Field.Text
              name="assetId"
              label="Coin ID"
              placeholder="Input your Coin ID"
              disabled={user?.activated}
            />
          </Form>
          <Stack direction="row" justifyContent="flex-end" spacing={3}>
            <LoadingButton
              type="submit"
              color="primary"
              variant="contained"
              onClick={onSubmit}
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
