import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { explorerService } from 'src/utils/axios/api-service';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
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
        setPrice(data * 1.05);
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
    <Container maxWidth="lg">
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        <Card
          sx={{
            p: 4,
            flex: 1,
            borderRadius: 3,
            boxShadow: (theme) => theme.customShadows.z24,
          }}
        >
          <Form methods={methods} onSubmit={onSubmit}>
            <Stack spacing={5}>
              <Box>
                <Typography
                  variant="overline"
                  display="block"
                  color="text.secondary"
                  fontWeight={700}
                  letterSpacing={1}
                  mb={2}
                >
                  Amount Calculator
                </Typography>
                <Estimator isTXC={isTXC} price={price} />
              </Box>

              <Box>
                <Typography
                  display="block"
                  variant="overline"
                  color="text.secondary"
                  mb={2}
                  fontWeight={700}
                  letterSpacing={1}
                >
                  Wallet Address
                </Typography>
                <Field.CustomAutocomplete
                  freeSolo
                  fullWidth
                  name="address"
                  label={`${isTXC.value ? 'TXC' : 'ETH'} Receiving Address`}
                  placeholder={`Enter or select your ${isTXC.value ? 'TXC' : 'ETH'} wallet address`}
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

              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                startIcon={<Iconify icon="solar:rocket-2-bold-duotone" width={24} />}
              >
                Complete Purchase
              </LoadingButton>
            </Stack>
          </Form>
        </Card>

        <Stack spacing={3} width={{ md: 360 }}>
          <Card
            sx={{
              p: 3,
              color: 'primary.contrastText',
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
              boxShadow: (theme) => theme.customShadows.primary,
            }}
          >
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Iconify icon="solar:chart-bold-duotone" width={28} />
                <Typography variant="h6" fontWeight={700}>
                  Live Price
                </Typography>
              </Stack>
              <PriceViewer price={price} loading={loading} getPrice={getPrice} />
            </Stack>
          </Card>

          <Helper />
        </Stack>
      </Stack>
    </Container>
  );
}
