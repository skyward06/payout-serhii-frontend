import states from 'states-us';
import countries from 'country-list';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { removeSpecialCharacters } from 'src/utils/helper';

import { COUNTRY } from 'src/consts';
import { PaymentType, CommissionDefault } from 'src/__generated__/graphql';
import { usePackagesContext } from 'src/libs/Packages/Context/usePackagesContext';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';
import { SearchMiner } from 'src/components/SearchMiner';

import { usePaymentMethodPackageRules } from 'src/sections/SignUp/useApollo';
import { PlacementSelector } from 'src/sections/Sponsor/Create/placementSelector';

import { useAuthContext } from 'src/auth/hooks';

import { Schema, type SchemaType } from './schema';
import { useCreateAddMemberOrder } from '../useApollo';

export function AddMiner() {
  const router = useRouter();
  const { user } = useAuthContext();

  const [state, setState] = useState<string>();
  const [products, setProducts] = useState<any[]>([]);
  const [packageId, setPackageId] = useState<string>();
  const [sponsorId, setSponsorId] = useState<string | null>(null);
  const [placementParentId, setPlacementParentId] = useState<string | null>(null);

  const location = useLocation();

  const defaultValues = {
    email: '',
    assetId: null,
    note: '',
    uname: '',
    primaryAddress: '',
    secondaryAddress: '',
    country: COUNTRY.USA,
    state: '',
    zipCode: '',
    city: '',
    paymentType: 'Crypto',
    commissionDefault: CommissionDefault.Usdc,
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
  const paymentTypeValue = watch('paymentType');

  const paymentTypeData =
    user?.country === COUNTRY.USA
      ? Object.keys(PaymentType).filter((item) => item !== 'None')
      : Object.keys(PaymentType)
          .filter((item) => item !== 'None')
          .filter((item) => item !== 'Ach');

  const { packages } = usePackagesContext();
  const { packageRules } = usePaymentMethodPackageRules();
  const { createAddMemberOrder } = useCreateAddMemberOrder();

  const handlePackageChange = (value: string) => {
    setPackageId(value);
  };

  const onSubmit = handleSubmit(
    async ({
      firstName,
      lastName,
      uname,
      txcAddress,
      giftCode,
      paymentType,
      commissionDefault,
      ...rest
    }) => {
      try {
        if (!packageId) {
          toast.error('Package is required');
          return;
        }

        if ((user?.isTexitRanger || user?.peerAcceptable) && !sponsorId) {
          toast.error('Sponsor is required');
          return;
        }

        const { data } = await createAddMemberOrder({
          variables: {
            data: {
              ...rest,
              username: removeSpecialCharacters(uname),
              state: country === COUNTRY.USA ? state : '',
              packageId,
              placementParentId,
              assetId: rest.assetId === '' ? null : rest.assetId,
              paymentType: paymentType.toUpperCase() as PaymentType,
              commissionDefault: commissionDefault as CommissionDefault,
              fullName: `${firstName} ${lastName}`,
              ...((user?.isTexitRanger || user?.peerAcceptable) && {
                sponsorId: sponsorId || user.id,
              }),
              ...(country !== COUNTRY.USA && {
                txcAddress,
              }),
              ...(paymentTypeValue?.toUpperCase() === PaymentType.Gift && {
                giftCode,
              }),
            },
          },
        });

        if (data) {
          router.push(paths.pages.order.detail(data.createAddMemberOrder.id));
        }
      } catch (err) {
        if (err instanceof ApolloError) {
          const [error] = err.graphQLErrors;

          if (error.path?.includes('username')) {
            setError('uname', { type: 'manual', message: error?.message || '' });
          }

          toast.error(error.message);
        } else {
          toast.error(err);
        }
      }
    }
  );

  useEffect(() => {
    const paymentMethodPackageMap: Record<string, any[]> = {};

    packages.forEach(({ id }) => {
      paymentMethodPackageMap[id] = Object.keys(PaymentType)
        .filter((item) => item !== 'None')
        .slice();

      const whiteList = packageRules.filter((rule) => rule.packageId === id && rule.isWhiteList);
      const blackList = packageRules.filter((rule) => rule.packageId === id && !rule.isWhiteList);

      if (whiteList.length > 0) {
        paymentMethodPackageMap[id] = paymentMethodPackageMap[id].filter((pm) =>
          whiteList.some((rule) => pm.toLowerCase() === rule.paymentMethod.toLowerCase())
        );
      } else if (blackList.length > 0) {
        paymentMethodPackageMap[id] = paymentMethodPackageMap[id].filter(
          (pm) => !blackList.some((rule) => pm.toLowerCase() === rule.paymentMethod.toLowerCase())
        );
      }
    });

    setProducts(
      packages.filter(({ id }) => paymentMethodPackageMap[id].includes(paymentTypeValue))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentTypeValue, packages, packageRules]);

  useEffect(() => {
    setValue('assetId', '');
    setValue('txcAddress', '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  const renderForm = (
    <>
      <Box
        rowGap={2}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
      >
        <Field.Text name="firstName" label="First Name" required />
        <Field.Text name="lastName" label="Last Name" required />
        <Field.Text name="email" label="Email Address" required />
        <Field.Phone name="mobile" label="Phone" />
        <Field.Text name="primaryAddress" label="Address" />
        <Field.Text name="secondaryAddress" label="Address 2" />
        <Field.Text name="city" label="City" />

        <Autocomplete
          freeSolo
          fullWidth
          options={states}
          getOptionLabel={(option: any) => option.name}
          disabled={country !== COUNTRY.USA}
          renderInput={(params) => (
            <TextField {...params} name="state" label="States" margin="none" />
          )}
          renderOption={(props, option) => (
            <li {...props} key={option!.name}>
              {option.name}
            </li>
          )}
          onChange={(_, value: any) => setState(value.name)}
          onInputChange={(_, value: any) => setState(value)}
        />

        <Field.Autocomplete
          name="country"
          label="Country"
          fullWidth
          options={countries.getNames()}
          getOptionLabel={(option: any) => option}
          renderOption={(props, option) => (
            <li {...props} key={option}>
              {option}
            </li>
          )}
        />

        <Field.Text name="zipCode" label="Zip Code" />

        {country === COUNTRY.USA ? (
          <Field.Text
            name="assetId"
            label="Coin ID"
            placeholder="Do you have a Coin ID? Enter the ID here"
          />
        ) : (
          <Field.Text
            name="txcAddress"
            label="Wallet address"
            InputLabelProps={{ shrink: true }}
            placeholder="Input your TXC wallet address"
          />
        )}

        <Field.Text name="uname" label="Affiliate ID" placeholder="5 characters or more" required />

        {(user?.isTexitRanger || user?.peerAcceptable) && (
          <SearchMiner label="Sponsor" setMemberId={setSponsorId} />
        )}

        <Field.Select name="paymentType" label="Payment Type" required>
          {paymentTypeData.map((option) => (
            <MenuItem key={option} value={option}>
              {option === 'Gift' ? 'Gift Card' : option}
            </MenuItem>
          ))}
        </Field.Select>

        <Field.Select
          name="packageId"
          label="Package"
          fullWidth
          inputProps={{ sx: { width: 'auto', minWidth: '100%' } }}
          value={location.state?.packageId ?? packageId}
          onChange={(event) => handlePackageChange(event.target.value)}
          helperText="Please select a payment type first"
          required
        >
          {products.map((option) => (
            <MenuItem key={option?.id} value={option?.id}>
              {`$${option?.amount} @ ${option?.productName}`}
            </MenuItem>
          ))}
        </Field.Select>

        <PlacementSelector
          currentMember={
            location?.state
              ? {
                  id: location.state?.placementParentId,
                  username: location.state?.username,
                  fullName: location.state?.fullName,
                }
              : null
          }
          setMemberId={setPlacementParentId}
        />

        <Field.Select name="placementPosition" label="Placement Position">
          <MenuItem key="left" value="LEFT">
            Left
          </MenuItem>
          <MenuItem key="right" value="RIGHT">
            Right
          </MenuItem>
        </Field.Select>

        <Field.Select
          name="commissionDefault"
          label="Commission Default"
          InputLabelProps={{ shrink: true }}
          defaultValue={CommissionDefault.Usdc}
          required
        >
          {Object.values(CommissionDefault).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Field.Select>

        {paymentTypeValue?.toUpperCase() === PaymentType.Gift && (
          <Field.Text name="giftCode" label="Gift Code" />
        )}
      </Box>

      <Box display="flex" justifyContent="flex-end" gap={2} alignItems="center" mt={2}>
        <LoadingButton
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Submit
        </LoadingButton>
      </Box>
    </>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </Form>
  );
}
