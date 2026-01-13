import type { UseBooleanReturn } from 'src/hooks/useBoolean';
import type { PlaidAccountWithNumbers } from 'src/__generated__/graphql';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { Schema, type SchemaType } from './schema';
import { useSubmitOrderACHWithPlaid } from './useApollo';

interface Props {
  accessToken: string;
  open: UseBooleanReturn;
  account: PlaidAccountWithNumbers;
  orderId: string;
}

export function ConfirmationHolder({ open, account, accessToken, orderId }: Props) {
  const router = useRouter();
  const { loading, submitOrderACHWithPlaid } = useSubmitOrderACHWithPlaid();

  const defaultValues = {
    checkNumber: '',
    name: '',
    sign: '',
  };

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { data: result } = await submitOrderACHWithPlaid({
        name: data.name,
        orderId,
        plaidAccessToken: accessToken,
        plaidAccountId: account.accountId,
        checkNumber: data.checkNumber,
        sign: data.sign,
      });

      if (result?.submitOrderACHPaymentWithPlaid.ID) {
        reset();
        router.push(paths.auth.verifyResult);
      }
    } catch (err) {
      toast.error(err.message);
    }
  });

  return (
    <Dialog open={open.value} onClose={open.onFalse} fullWidth maxWidth="xs">
      <DialogTitle>Payment Detail</DialogTitle>
      <DialogContent>
        <Form methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} py={1}>
            <Field.Text name="name" label="Your name" />
            <Field.Text name="sign" label="Signature (Type your full name)" />
            <Field.Text name="checkNumber" label="Check Number (Optional)" />
          </Stack>
        </Form>
      </DialogContent>
      <DialogActions>
        <LoadingButton variant="contained" color="primary" onClick={onSubmit} loading={loading}>
          Confirm
        </LoadingButton>
        <Button variant="outlined" onClick={open.onFalse}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
