import trim from 'lodash/trim';
import states from 'states-us';
import countries from 'country-list';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { ApolloError } from '@apollo/client';
import ReCAPTCHA from 'react-google-recaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useMemo, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { removeSpecialCharacters } from 'src/utils/helper';

import { CONFIG } from 'src/config';
import { COUNTRY, PAYMENT_METHOD_IDS } from 'src/consts';
import { CommissionDefault } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import Calculator from './Calculator';
import { Schema, type SchemaType } from './schema';
import { useCreateSignUpOrder } from '../Order/useApollo';
import { useFetchEnrollmentPaymentMethods } from '../Payment/useApollo';
import { useSignUp, useFetchSignUpPackages, usePaymentMethodPackageRules } from './useApollo';

// ----------------------------------------------------------------------

interface Props {
  isComponent?: boolean;
}

export function SignUpView({ isComponent = false }: Props) {
  const router = useRouter();
  const [state, setState] = useState<string>();
  const [products, setProducts] = useState<any[]>([]);
  const recaptcha = useRef<any>();

  const location = useLocation();
  const queryParams = isComponent
    ? new URLSearchParams(location.search.split('?')[1])
    : new URLSearchParams(location.hash.split('?')[1]);

  const referralID = queryParams.get('sponsor');
  const localStorageReferralID = localStorage.getItem('payout_reference');
  const refID = referralID || localStorageReferralID || '';

  const calculator = useBoolean();

  const defaultValues = {
    sponsorUsername: refID,
    email: '',
    assetId: null,
    note: '',
    uname: '',
    primaryAddress: '',
    secondaryAddress: '',
    paymentMethod: `${PAYMENT_METHOD_IDS[0]}::Crypto`,
    commissionDefault: CommissionDefault.Usdc,
    state: '',
    country: COUNTRY.USA,
    zipCode: '',
    city: '',
  };

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const {
    watch,
    setError,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const country = watch('country');
  const paymentMethod = watch('paymentMethod');

  const isPeerCode = paymentMethod?.split('::')[0] === PAYMENT_METHOD_IDS[1];
  const isGiftCode = paymentMethod?.split('::')[0] === PAYMENT_METHOD_IDS[4];

  const { submitSignUp } = useSignUp();
  const { user, signOut } = useAuthContext();
  const { packages } = useFetchSignUpPackages();
  const { createSignUpOrder } = useCreateSignUpOrder();
  const { packageRules } = usePaymentMethodPackageRules();
  const { payments } = useFetchEnrollmentPaymentMethods();

  const paymentData = useMemo(
    () =>
      country === COUNTRY.USA
        ? payments
        : payments
            .filter((payment) => payment.id !== PAYMENT_METHOD_IDS[2])
            .filter((payment) => payment.id !== PAYMENT_METHOD_IDS[3]),
    [country, payments]
  );

  const onSubmit = handleSubmit(
    async ({
      firstName,
      lastName,
      sponsorUsername,
      uname,
      txcAddress,
      packageId,
      giftCode,
      ...rest
    }) => {
      try {
        const captchaValue = recaptcha.current.getValue();

        if (!captchaValue) {
          toast.error('Please verify the reCAPTCHA!');
          return;
        }

        if (
          rest.country !== COUNTRY.USA &&
          rest.paymentMethod.split('::')[0] === PAYMENT_METHOD_IDS[2]
        ) {
          toast.error('ACH payment method is available for only USA residents.');
          return;
        }

        if (user) {
          await handleSignOut();
        }

        const { data } = await submitSignUp({
          variables: {
            data: {
              ...rest,
              packageId: packageId.split('::')[0],
              paymentMethod: rest.paymentMethod.split('::')[1],
              paymentPeerCode: isPeerCode ? rest.paymentPeerCode : null,
              state: country === COUNTRY.USA ? state : '',
              username: removeSpecialCharacters(uname),
              fullName: `${trim(firstName)} ${trim(lastName)}`,
              assetId: rest.assetId === '' ? null : rest.assetId,
              sponsorUsername,
              ...(isGiftCode && { giftCode }),
              ...(country !== COUNTRY.USA && {
                txcAddress,
              }),
              recaptcha: captchaValue,
            },
          },
        });

        if (data) {
          recaptcha.current?.reset();
          localStorage.setItem('payout_reference', refID || sponsorUsername);

          const searchParams = new URLSearchParams({ email: rest.email }).toString();

          if (
            rest.paymentMethod.split('::')[0] === PAYMENT_METHOD_IDS[0] ||
            rest.paymentMethod.split('::')[0] === PAYMENT_METHOD_IDS[2] ||
            rest.paymentMethod.split('::')[0] === PAYMENT_METHOD_IDS[4]
          ) {
            const { data: order } = await createSignUpOrder({
              variables: {
                data: { memberId: data.signUpMember.id },
              },
            });

            if (order) {
              router.push(paths.pages.order.detail(order.createSignUpOrder.id));
            }
          } else {
            router.push(`${paths.auth.verifyResult}?${searchParams}`);
          }
        }
      } catch (err) {
        recaptcha.current?.reset();
        if (err instanceof ApolloError) {
          const [error] = err.graphQLErrors;

          if (error.path?.includes('username')) {
            setError('uname', { type: 'manual', message: error?.message || '' });
          }
          toast.error(error.message);
        }
      } finally {
        recaptcha.current?.reset();
      }
    }
  );

  useEffect(() => {
    const paymentMethodPackageMap: Record<string, any[]> = {};

    packages.forEach(({ id }) => {
      paymentMethodPackageMap[id] = payments.slice();

      const whiteList = packageRules.filter((rule) => rule.packageId === id && rule.isWhiteList);
      const blackList = packageRules.filter((rule) => rule.packageId === id && !rule.isWhiteList);

      if (whiteList.length > 0) {
        paymentMethodPackageMap[id] = paymentMethodPackageMap[id].filter((pm) =>
          whiteList.some((rule) => pm.name.toLowerCase().includes(rule.paymentMethod.toLowerCase()))
        );
      }

      if (blackList.length > 0) {
        paymentMethodPackageMap[id] = paymentMethodPackageMap[id].filter(
          (pm) =>
            !blackList.some((rule) =>
              pm.name.toLowerCase().includes(rule.paymentMethod.toLowerCase())
            )
        );
      }
    });

    setProducts(
      packages.filter(({ id }) =>
        paymentMethodPackageMap[id].map((item) => item.id).includes(paymentMethod.split('::')[0])
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentMethod, packages]);

  useEffect(() => {
    localStorage.setItem('payout_reference', refID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (location.state?.packageId) {
      watch('packageId', location.state.packageId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  useEffect(() => {
    setValue('assetId', '');
    setValue('txcAddress', '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  const handleSignOut = useCallback(async () => {
    try {
      signOut();
    } catch (error) {
      console.error(error);
    }
  }, [signOut]);

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 5, outline: 'none' }} id="sign-up" tabIndex={-1}>
      <Typography variant="h2" textAlign="center">
        Fill out the form and let&apos;s blast off...
      </Typography>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={3}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="firstName" label="First Name" required />
        <Field.Text name="lastName" label="Last Name" required />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="email" label="Email Address" required />
        <Field.Phone name="mobile" label="Phone" />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="primaryAddress" label="Address" />
        <Field.Text name="secondaryAddress" label="Address 2" />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Autocomplete
          name="country"
          label="Country"
          required
          fullWidth
          options={countries.getNames()}
          getOptionLabel={(option: any) => option}
          renderOption={(props, option) => (
            <li {...props} key={option}>
              {option}
            </li>
          )}
        />

        <Autocomplete
          freeSolo
          fullWidth
          options={states}
          getOptionLabel={(option: any) => option.name}
          disabled={country !== COUNTRY.USA}
          renderInput={(params) => (
            <TextField {...params} name="state" label="State" margin="none" />
          )}
          renderOption={(props, option) => (
            <li {...props} key={option!.name}>
              {option.name}
            </li>
          )}
          onChange={(_, value: any) => setState(value.name)}
          onInputChange={(_, value: any) => setState(value)}
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="city" label="City" />
        <Field.Text name="zipCode" label="Zip Code" />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Stack width={1}>
          <Field.Autocomplete
            name="packageId"
            label="Package"
            required
            fullWidth
            helperText="Please select a payment method first"
            options={products.map(
              (option) => `${option.id}::$${option.amount} @ ${option.productName}`
            )}
            getOptionLabel={(option: any) => option.split('::')[1]}
            renderOption={(props, option) => (
              <li {...props} key={option.split('::')[0]}>
                {option.split('::')[1]}
              </li>
            )}
          />
        </Stack>
        <Stack width={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Field.Autocomplete
              name="commissionDefault"
              label="Commission Default"
              required
              fullWidth
              options={Object.values(CommissionDefault)}
              getOptionLabel={(option: any) => option}
              renderOption={(props, option) => (
                <li {...props} key={option}>
                  {option}
                </li>
              )}
            />

            <Box>
              <IconButton onClick={calculator.onTrue}>
                <Iconify icon="system-uicons:calculator" width={30} />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
        <Stack width={1}>
          <Typography>This will be your affiliate ID </Typography>
        </Stack>
        <Stack width={1}>
          <Field.Text
            name="uname"
            label="Affiliate ID"
            placeholder="5 characters or more"
            InputLabelProps={{ shrink: true }}
            required
          />
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
        <Stack width={1}>
          <Typography>How would you like to pay?</Typography>
        </Stack>
        <Stack width={1}>
          <Field.Autocomplete
            name="paymentMethod"
            label="Payment Method"
            required
            fullWidth
            options={paymentData.map((payment) => `${payment.id}::${payment.name}`)}
            getOptionLabel={(option: any) => option.split('::')[1]}
            renderOption={(props, option) => (
              <li {...props} key={option.split('::')[0]}>
                {option.split('::')[1] === 'Gift' ? 'Gift Card' : option.split('::')[1]}
              </li>
            )}
          />
        </Stack>
      </Stack>

      {isGiftCode && (
        <Stack direction="row" justifyContent="flex-end">
          <Field.Text name="giftCode" label="Gift Code" sx={{ width: 200 }} />
        </Stack>
      )}

      {isPeerCode && (
        <Stack direction="row" justifyContent="flex-end">
          <Field.Text name="paymentPeerCode" label="Peer Code" sx={{ width: 200 }} />
        </Stack>
      )}

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
        <Stack width={1}>
          <Typography>How did you hear about us?</Typography>
        </Stack>
        <Stack width={1}>
          <Field.Text
            name="sponsorUsername"
            label="Sponsor ID"
            InputLabelProps={{ shrink: true }}
            placeholder="name or ID of the person"
          />
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
        <Stack width={1}>
          <Typography>
            {country === COUNTRY.USA ? 'Have a Cold Storage Coin?' : 'Your TXC Wallet is REQUIRED'}
          </Typography>
        </Stack>
        <Stack width={1}>
          {country === COUNTRY.USA ? (
            <Field.Text
              name="assetId"
              label="Coin ID"
              InputLabelProps={{ shrink: true }}
              placeholder="Do you have a coin? Enter the ID here"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip
                      title="To get started with your TXC wallet, simply click here for step-by-step instructions."
                      placement="left"
                      arrow
                    >
                      <IconButton
                        sx={{ bgcolor: 'action.hover', '&:hover': { bgcolor: 'action.selected' } }}
                        onClick={() =>
                          window.open('https://texitcoin.org/TEXITcoin-Wallets.html', '_blank')
                        }
                      >
                        <Iconify icon="entypo:link" />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <Field.Text
              name="txcAddress"
              label="Wallet address"
              InputLabelProps={{ shrink: true }}
              placeholder="Input your TXC wallet address"
            />
          )}
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="flex-end" spacing={2}>
        <Stack direction="row" justifyContent="flex-end">
          <ReCAPTCHA ref={recaptcha} sitekey={CONFIG.RECAPTCHA_KEY} />
        </Stack>
        <Stack direction="row" justifyContent="flex-end" spacing={2} alignItems="center">
          {!isComponent && (
            <Link onClick={handleSignOut} variant="subtitle2" sx={{ cursor: 'pointer' }}>
              Click here to sign out
            </Link>
          )}
          <LoadingButton
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Submit
          </LoadingButton>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Container sx={{ pb: 5 }}>
      {renderHead}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>

      <Calculator open={calculator} />
    </Container>
  );
}
