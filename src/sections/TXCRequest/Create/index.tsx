import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { explorerService } from 'src/utils/axios/api-service';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import { Helper } from './Helper';
import { Estimator } from './Estimator';
import { PriceViewer } from './PriceViewer';
import { Schema, type SchemaType } from './schema';
import { useCreateBuyTXCOrder, useCreateBuyWTXCOrder } from '../useApollo';

export default function TXCRequest() {
  const router = useRouter();
  const isTXC = useBoolean();
  const loading = useBoolean();

  const { user } = useAuthContext();

  const [price, setPrice] = useState<number>(0);

  const { createBuyTXCOrder } = useCreateBuyTXCOrder();
  const { createBuyWTXCOrder } = useCreateBuyWTXCOrder();

  const defaultValues = {
    payment: 'TXC',
    address: '',
    buy: 1,
    pay: 1,
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

  const onSubmit = handleSubmit(async ({ address }) => {
    try {
      if (isTXC.value) {
        const { data } = await createBuyTXCOrder({ address });

        if (data) {
          router.push(`${paths.pages.order.root}/${data.createBuyTXCOrder.id}`);
        }
      } else {
        const { data } = await createBuyWTXCOrder({ address });

        if (data) {
          router.push(`${paths.pages.order.root}/${data.createBuyWTXCOrder.id}`);
        }
      }

      reset();
    } catch (err) {
      if (err instanceof ApolloError) {
        const [error] = err.graphQLErrors;

        if (error.path?.includes('address')) {
          setError('address', { type: 'manual', message: error?.message || '' });
        }

        toast.error(error?.message);
      } else {
        toast.error(err);
      }
    }
  });

  const getPrice = async () => {
    try {
      loading.onTrue();

      const data = await explorerService.getCurrentPrice();
      if (typeof data === 'number') {
        setPrice(data);
      } else {
        setPrice(0);
      }

      loading.onFalse();
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ width: { md: 800, sm: 500, xs: 300 }, mx: 'auto' }}>
      <Form methods={methods} onSubmit={onSubmit}>
        <Estimator isTXC={isTXC} price={price} />

        <Field.CustomAutocomplete
          freeSolo
          fullWidth
          name="address"
          label={`${isTXC.value ? 'TXC' : 'ETH'} address`}
          placeholder={`Your ${isTXC.value ? 'TXC' : 'ETH'} address to receive`}
          options={user?.memberWallets?.map((item) => item.address) ?? []}
          getOptionLabel={(option: any) => option}
          isOptionEqualToValue={(option, value) => option === value}
          renderOption={(props, option) => (
            <li {...props} key={option}>
              {option}
            </li>
          )}
        />

        <Stack
          direction={{ md: 'row', sm: 'column' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          rowGap={2}
          mt={2}
        >
          <PriceViewer price={price} loading={loading} getPrice={getPrice} />

          <LoadingButton type="submit" variant="contained" color="primary" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </Stack>

        <Helper />
      </Form>
    </Box>
  );
}
