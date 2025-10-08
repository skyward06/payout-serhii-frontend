import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { Schema, type SchemaType } from './schema';
import { useActivateMember } from '../../useApollo';

interface Props {
  open: UseBooleanReturn;
}

export function ActivateModal({ open }: Props) {
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
        toast.success('Member activated successfully!');
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
  );
}
