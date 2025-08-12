import type { ColDef } from '@ag-grid-community/core';
import type { CustomCellRendererProps } from '@ag-grid-community/react';

import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { fNumber } from 'src/utils/formatNumber';
import { truncateMiddle } from 'src/utils/helper';
import { fDateTime, customizeDate } from 'src/utils/format-time';

import { AgGrid } from 'src/components/AgGrid';
import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { useFetchReward } from '../../useApollo';

import type { RewardByWallet } from '../types';

export default function Wallets() {
  const [from, setFrom] = useState<any>(dayjs('2024-04-01'));
  const [to, setTo] = useState<any>(dayjs());

  const { loading, reward } = useFetchReward({ from: customizeDate(from), to: customizeDate(to) });

  const { copy } = useCopyToClipboard();

  const onCopy = (value: string) => {
    if (value) {
      copy(value);
      toast.success('Copied');
    }
  };

  const renderHeader = (
    <Stack direction="row" justifyContent="flex-end" sx={{ py: 1 }}>
      <Stack direction="row" gap={2}>
        <DesktopDatePicker
          label="Start Date"
          minDate={dayjs('2024-04-01')}
          format="YYYY-MM-DD"
          slotProps={{ textField: { fullWidth: true } }}
          defaultValue={dayjs('2024-04-01')}
          onChange={(newValue) => setFrom(fDateTime(newValue))}
        />
        <DesktopDatePicker
          label="End Date"
          minDate={dayjs('2024-04-01')}
          format="YYYY-MM-DD"
          slotProps={{ textField: { fullWidth: true } }}
          defaultValue={dayjs()}
          onChange={(newValue) => setTo(fDateTime(newValue))}
        />
      </Stack>
    </Stack>
  );

  const colDefs = useMemo<ColDef<RewardByWallet>[]>(
    () => [
      {
        field: 'wallet.payout.method',
        headerName: 'Method',
        width: 250,
        sortable: false,
      },
      {
        field: 'wallet.address',
        headerName: 'Address',
        flex: 1,
        minWidth: 350,
        sortable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<RewardByWallet>) => (
          <Box display="flex" gap={1}>
            <Typography variant="body2" fontFamily="monospace">
              {truncateMiddle(data?.wallet.address, 30, false)}
            </Typography>

            <Iconify
              icon="stash:copy-light"
              cursor="pointer"
              onClick={() => onCopy(data?.wallet.address!)}
            />
          </Box>
        ),
      },
      {
        field: 'txc',
        headerName: 'TXC Shared',
        width: 250,
        sortable: false,
        cellClass: 'ag-number-cell ag-right-aligned-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<RewardByWallet>) =>
          fNumber((Number(data?.txc) ?? 0) / 10 ** 8),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Card sx={{ borderRadius: '10px 10px 0 0' }}>{renderHeader}</Card>

      <Card
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '0 0 10px 10px',
        }}
      >
        <AgGrid<RewardByWallet>
          gridKey="miner-reward-wallet-list"
          loading={loading}
          rowData={reward}
          columnDefs={colDefs}
        />
      </Card>
    </>
  );
}
