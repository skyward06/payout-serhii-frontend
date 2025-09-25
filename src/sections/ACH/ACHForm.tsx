import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';

import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { useCreateACH } from './useApollo';
import { Schema, type SchemaType } from './schema';

export function ACHForm() {
  const { state } = useLocation();
  const router = useRouter();

  const defaultValues = {
    accountNumber: '',
    routingNumber: '',
    amountInCent: 0,
    bankName: '',
    checkNumber: '',
    name: '',
    sign: '',
  };

  const { loading, createACH } = useCreateACH();

  const methods = useForm<SchemaType>({ resolver: zodResolver(Schema), defaultValues });

  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (newData) => {
    const { data } = await createACH({ id: state.id, ...newData });

    if (data) {
      router.push(paths.auth.verifyResult);
      toast.success('ACH payment submitted successfully.');
      reset();
    }
  });

  return (
    <>
      <Stack spacing={1.5} sx={{ mb: 2.5 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify icon="mdi:bank-transfer" width={24} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ACH Payment Details
          </Typography>
          <Chip size="small" label="ACH" color="primary" variant="soft" />
        </Stack>
        <Alert severity="info" variant="outlined">
          Enter the bank account and payment information below. Double-check numbers before
          submitting.
        </Alert>
      </Stack>

      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
            <Divider textAlign="left">Bank details</Divider>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field.Text
              fullWidth
              name="accountNumber"
              label="Account Number"
              required
              placeholder="e.g., 000123456789"
              helperText="Your bank account number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="mdi:card-account-details-outline" width={20} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field.Text
              fullWidth
              name="routingNumber"
              label="Routing Number"
              required
              placeholder="9-digit routing number"
              helperText="ABA routing number (9 digits)"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="mdi:shield-key-outline" width={20} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field.Text
              fullWidth
              name="bankName"
              label="Bank Name"
              required
              placeholder="e.g., First National Bank"
              helperText="Name of your bank"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="mdi:bank-outline" width={20} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field.Text
              fullWidth
              name="checkNumber"
              label="Check Number"
              placeholder="Optional"
              helperText="Optional reference/check number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="mdi:checkbox-marked-outline" width={20} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider textAlign="left">Payment & authorization</Divider>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field.Text
              fullWidth
              type="number"
              name="amountInCent"
              label="Amount"
              required
              placeholder="e.g., 19.99"
              helperText="Enter the amount (e.g., 19.99). Minimum 0."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="mdi:currency-usd" width={20} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field.Text
              fullWidth
              name="name"
              label="Account Holder Name"
              required
              placeholder="Full legal name"
              helperText="Name on the bank account"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="mdi:account-outline" width={20} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Field.Text
              fullWidth
              name="sign"
              label="Signature"
              required
              placeholder="Type your full name as signature"
              helperText="By signing, you authorize this ACH debit."
              multiline
              rows={3}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="mdi:signature-freehand" width={20} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={1.5} justifyContent="flex-end" sx={{ mt: 1 }}>
              <LoadingButton
                variant="outlined"
                color="inherit"
                onClick={() => reset(defaultValues)}
                disabled={loading}
                startIcon={<Iconify icon="mdi:restart" width={18} />}
              >
                Reset
              </LoadingButton>

              <LoadingButton
                type="submit"
                color="primary"
                variant="contained"
                loading={loading}
                startIcon={<Iconify icon="mdi:check-circle-outline" width={18} />}
              >
                Submit
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
