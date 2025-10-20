import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { RouterLink } from 'src/routes/components';

import { MEMPOOL_URL } from 'src/consts';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import { useActivateMember } from '../../useApollo';
import { ActivateSchema, type ActivateSchemaType } from './schema';

interface Props {
  open: UseBooleanReturn;
}

export function ActivateModal({ open }: Props) {
  const { loading, activateMember } = useActivateMember();
  const { user } = useAuthContext();

  const methods = useForm<ActivateSchemaType>({
    resolver: zodResolver(ActivateSchema),
    defaultValues: { assetId: '' },
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (newData) => {
    try {
      const { data } = await activateMember(newData);

      if (data) {
        toast.success(
          <Stack spacing={1} p={2}>
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <Iconify
                icon="material-symbols:check-circle-rounded"
                color="primary.main"
                width={28}
              />
              <Box>
                <Typography variant="subtitle1">
                  {`Successfully activated. ${Number(user?.totalTXCNotReceived) !== 0 ? 'Your missed reward will be sent you shortly.' : ''}`}
                </Typography>
                {data.activateMember.activationTx ? (
                  <>
                    <Typography variant="subtitle2" mt={1}>
                      Transaction Hash
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component={RouterLink}
                      href={`${MEMPOOL_URL}/tx/${data.activateMember.activationTx}`}
                      target="_blank"
                    >
                      {data.activateMember.activationTx}
                    </Typography>
                  </>
                ) : null}
              </Box>
            </Stack>
          </Stack>
        );

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
