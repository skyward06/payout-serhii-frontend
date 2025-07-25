import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { explorerService } from 'src/utils/axios/api-service';

import { DEX_TRADE_TXC_URL } from 'src/consts';
import { DashboardContent } from 'src/layouts/dashboard';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { useAuthContext } from 'src/auth/hooks';

import { Schema, type SchemaType } from './schema';
import { useCreateBuyTXCOrder } from '../useApollo';

export default function TXCRequest() {
  const router = useRouter();
  const { user } = useAuthContext();

  const [price, setPrice] = useState<number>(0);

  const { createBuyTXCOrder } = useCreateBuyTXCOrder();

  const defaultValues = {
    amount: 0,
  };

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (newData) => {
    try {
      const { data } = await createBuyTXCOrder(newData);

      if (data) {
        reset();
        router.push(`${paths.pages.order.root}/${data.createBuyTXCOrder.id}`);
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        const [error] = err.graphQLErrors;

        if (error.path?.includes('amount')) {
          setError('amount', { type: 'manual', message: error?.message || '' });
        }

        toast.error(error?.message);
      } else {
        toast.error(err);
      }
    }
  });

  useEffect(() => {
    async function getPrice() {
      try {
        const data = await explorerService.getCurrentPrice();

        setPrice(data);
      } catch (error) {
        toast.error(error.message);
      }
    }

    getPrice();
  }, []);

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="TXC Request"
        links={[{ name: 'TXC Request', href: paths.dashboard.txcRequest.root }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Form methods={methods} onSubmit={onSubmit}>
        <Box
          rowGap={2}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          }}
        >
          <Field.Text type="number" name="amount" label="Amount" required />

          <Field.CustomAutocomplete
            freeSolo
            fullWidth
            name="walletAddress"
            label="Wallet address to receive"
            placeholder="Select or type wallet address"
            options={user?.memberWallets?.map((item) => item.address) ?? []}
            getOptionLabel={(option: any) => option}
            isOptionEqualToValue={(option, value) => option === value}
            renderOption={(props, option) => (
              <li {...props} key={option}>
                {option}
              </li>
            )}
          />
        </Box>

        <Stack direction="row" justifyContent="flex-end" mt={2}>
          <LoadingButton type="submit" variant="contained" color="primary" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </Stack>
      </Form>

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="subtitle1">TXC Price</Typography>
        <Typography variant="body1">{price}</Typography>
        <Tooltip title={TOOLTIP_TEXT} placement="right" arrow>
          <Iconify icon="flowbite:info-circle-outline" />
        </Tooltip>
      </Stack>
    </DashboardContent>
  );
}

const TOOLTIP_TEXT = (
  <Typography variant="caption">
    This is the price of TXC from{' '}
    <Link component={RouterLink} href={DEX_TRADE_TXC_URL}>
      Dex-Trade
    </Link>
  </Typography>
);
