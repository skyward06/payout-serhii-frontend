import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { useBoolean, type UseBooleanReturn } from 'src/hooks/useBoolean';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { useActivateMember } from '../../useApollo';
import { ActivateSchema, type ActivateSchemaType } from './schema';
import { TransactionModal } from '../../Activate/TransactionModal';

interface Props {
  open: UseBooleanReturn;
}

export function ActivateModal({ open }: Props) {
  const transactionOpen = useBoolean();
  const [txHash, setTxHash] = useState<string>();

  const { loading, activateMember } = useActivateMember();

  const methods = useForm<ActivateSchemaType>({
    resolver: zodResolver(ActivateSchema),
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
        }

        reset();
        open.onFalse();
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
      <Dialog open={open.value} onClose={open.onFalse} fullWidth maxWidth="xs">
        <DialogTitle>Activate Your Account</DialogTitle>
        <DialogContent>
          <Box py={2}>
            <Form methods={methods} onSubmit={onSubmit}>
              <Field.Text name="assetId" label="Coin ID" />
            </Form>
          </Box>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            onClick={onSubmit}
            loading={loading}
          >
            Activate
          </LoadingButton>
          <Button variant="outlined" onClick={open.onFalse}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <TransactionModal open={transactionOpen} txHash={txHash} />
    </>
  );
}
