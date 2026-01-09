import type { PlaidLinkOptions } from 'react-plaid-link';

import { ApolloError } from '@apollo/client';
import { usePlaidLink } from 'react-plaid-link';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fCurrency } from 'src/utils/formatNumber';

import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

import { Label } from 'src/components/Label';
import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { HelpView } from './Helper';
import {
  useCreatePlaidLinkToken,
  useSubmitOrderACHWithPlaid,
  useExchangePlaidPublicToken,
} from './useApollo';

interface Props {
  amount: number;
}

export function ACHForm({ amount }: Props) {
  const router = useRouter();

  const { order } = useOrderContext();
  const [linkToken, setLinkToken] = useState<string>('');

  const { createPlaidLinkToken } = useCreatePlaidLinkToken();
  const { submitOrderACHWithPlaid } = useSubmitOrderACHWithPlaid();
  const { exchangePlaidPublicToken } = useExchangePlaidPublicToken();

  const handleExchangePlaid = useCallback(
    async ({ public_token }: { public_token: string }) => {
      try {
        const { data } = await exchangePlaidPublicToken({ publicToken: public_token });

        if (data) {
          const account = data.exchangePlaidPublicToken.accounts[0];

          if (data.exchangePlaidPublicToken.accounts.length > 1) {
            toast.warning('Multiple accounts detected. Using the first one selected.');
          }

          if ((account.balances.available ?? 0) < (order.requiredBalance ?? 0)) {
            toast.warning(
              `Insufficient funds in the selected account. Available: $${account.balances.available}, Required: $${(order.requiredBalance ?? 0) / 100}. But this is just for bank account verification. So you can charge before real transaction.`,
              { duration: 10000 }
            );
          }

          const { data: result } = await submitOrderACHWithPlaid({
            name: account.name,
            orderId: order.id,
            plaidAccessToken: data.exchangePlaidPublicToken.accessToken,
            plaidAccountId: account.accountId,
            checkNumber: account.accountNumber,
            sign: account.name,
          });

          if (result?.submitOrderACHPaymentWithPlaid.ID) {
            router.push(paths.auth.verifyResult);
          }
        }
      } catch (err) {
        if (err instanceof ApolloError) {
          const [error] = err.graphQLErrors;

          if (error.message.includes('Insufficient funds')) {
            toast.warning(`${error.message} `, { duration: 10000 });
          } else {
            toast.error(error.message);
          }
        }
      }
    },
    [exchangePlaidPublicToken, submitOrderACHWithPlaid, order, router]
  );

  const config: PlaidLinkOptions = useMemo(
    () => ({
      onSuccess: (public_token: string) => {
        handleExchangePlaid({ public_token });
      },
      token: linkToken,
    }),
    [linkToken, handleExchangePlaid]
  );

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    async function createPlaid() {
      const { data } = await createPlaidLinkToken({ id: order.id });

      if (data) {
        setLinkToken(data.createPlaidLinkToken.linkToken);
      }
    }

    createPlaid();
  }, [order, createPlaidLinkToken]);

  return (
    <Stack spacing={3}>
      <Box mt={2} display="grid" gap={1}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Payment method
          </Typography>
          <Label variant="soft" color="primary">
            ACH
          </Label>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Amount Required
          </Typography>
          <Typography variant="body2" color="primary.main">
            {fCurrency(amount)}
          </Typography>
        </Stack>
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => open()}
        disabled={!ready}
        startIcon={<Iconify icon="eva:link-2-fill" />}
        sx={{ py: 1.5 }}
      >
        {ready ? 'Verify Bank Account with Plaid' : 'Loading...'}
      </Button>

      <HelpView />
    </Stack>
  );
}
