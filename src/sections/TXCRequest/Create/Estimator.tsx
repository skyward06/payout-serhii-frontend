import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/config';

import { Field } from 'src/components/Form';
import { Iconify } from 'src/components/Iconify';

const PAYMENTS = [
  { label: 'TXC', path: `${CONFIG.site.basePath}/assets/TXC.png` },
  { label: 'wTXC', path: `${CONFIG.site.basePath}/assets/WTXC.png` },
];

interface Props {
  price: number;
  isTXC: UseBooleanReturn;
}

export function Estimator({ isTXC, price }: Props) {
  const { watch, setValue } = useFormContext();

  const payment = watch('payment');

  useEffect(() => {
    if (payment === 'TXC') {
      isTXC.onTrue();
    } else {
      isTXC.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payment]);

  const handleBuyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue('buy', value);
    if (value !== '' && !Number.isNaN(Number(value))) {
      setValue('pay', (Number(value) * price).toFixed(4));
    } else {
      setValue('pay', '');
    }
  };

  const handlePayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue('pay', value);
    if (value !== '' && !Number.isNaN(Number(value))) {
      setValue('buy', (Number(value) / price).toFixed(4));
    } else {
      setValue('buy', '');
    }
  };

  return (
    <Grid container rowSpacing={4} columnSpacing={3} mb={2}>
      <Grid xs={12} md={3}>
        <Field.Select name="payment" defaultValue="TXC" label="Currency">
          {PAYMENTS.map((item) => (
            <MenuItem key={item.label} value={item.label}>
              <Box display="flex" alignItems="center" columnGap={2}>
                <Avatar src={item.path} sx={{ width: 24, height: 24 }} />
                {item.label}
              </Box>
            </MenuItem>
          ))}
        </Field.Select>
      </Grid>
      <Grid xs={12} md={6}>
        <Field.Text name="buy" type="number" label="Amount to buy" onChange={handleBuyChange} />
      </Grid>
      <Grid xs={12} md={3}>
        <Field.Text
          name="pay"
          type="number"
          label="Amount to pay"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="mdi:currency-usd" color="primary.main" />
              </InputAdornment>
            ),
          }}
          onChange={handlePayChange}
        />
      </Grid>
    </Grid>
  );
}
