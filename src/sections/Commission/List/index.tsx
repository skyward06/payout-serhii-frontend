import type { LabelColor } from 'src/components/Label';
import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, ISetFilterParams, ITextFilterParams } from '@ag-grid-community/core';

import dayjs from 'dayjs';
import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { formatID } from 'src/utils/helper';
import { formatWeekNumber } from 'src/utils/format-time';

import { COMMISSION_TYPE, COMMISSION_STATUS } from 'src/consts';
import { CommissionType, CommissionDefault } from 'src/__generated__/graphql';

import { AgGrid } from 'src/components/AgGrid';
import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { PointView, PriceView } from 'src/components/Common';
import { LabelRenderer } from 'src/components/ItemRenderers';

import { useFetchCommissions } from '../useApollo';
import { parseType, commissionParseType } from './parseType';

import type { WeeklyCommission } from '../type';

type BasicWeeklyCommission = Omit<WeeklyCommission, 'hasUSDC'>;

export default function CommissionTable() {
  const { copy } = useCopyToClipboard();

  const { loading, rowCount, weeklyCommissions } = useFetchCommissions();

  const onCopy = (value: string) => {
    toast.success('Copied!');
    copy(value);
  };

  const colDefs = useMemo<ColDef<BasicWeeklyCommission>[]>(() => {
    const baseColDef: ColDef<BasicWeeklyCommission>[] = [
      {
        field: 'ID',
        headerName: 'ID',
        width: 150,
        resizable: true,
        editable: false,
        initialSort: 'asc',
        cellClass: 'ag-cell-center tabular-nums',
        filter: 'agNumberColumnFilter',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            {formatID(data?.ID, 'C')}
            <IconButton onClick={() => onCopy(`${formatID(data?.ID, 'C')}`)}>
              <Iconify icon="iconamoon:copy-fill" />
            </IconButton>
          </Stack>
        ),
      },
      {
        field: 'weekStartDate',
        headerName: 'Week',
        width: 250,
        resizable: true,
        editable: false,
        sortable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Chip
              label={`Week ${formatWeekNumber(data?.weekStartDate)}`}
              size="small"
              variant="soft"
              color="primary"
              sx={{ fontWeight: 600, minWidth: 70 }}
            />
            <Typography variant="body2" color="text.secondary">
              {dayjs(data?.weekStartDate).utc().format('MMM DD')} -{' '}
              {dayjs(data?.weekStartDate).utc().add(6, 'day').format('MMM DD')}
            </Typography>
          </Stack>
        ),
      },
      {
        headerName: 'BegLR',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PointView leftValue={data?.begL!} rightValue={data?.begR!} />
        ),
      },
      {
        headerName: 'NewLR',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PointView leftValue={data?.newL!} rightValue={data?.newR!} />
        ),
      },
      {
        headerName: 'MaxLR',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PointView leftValue={data?.maxL!} rightValue={data?.maxR!} />
        ),
      },
      {
        headerName: 'Package',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) =>
          data?.status !== COMMISSION_STATUS.NONE.label ? (
            <PointView leftValue={data?.pkgL!} rightValue={data?.pkgR!} />
          ) : (
            'None'
          ),
      },
      {
        headerName: 'EndLR',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PointView leftValue={data?.endL!} rightValue={data?.endR!} />
        ),
      },
      {
        field: 'commission',
        headerName: 'Commissions',
        width: 160,
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center tabular-nums ag-right-aligned-cell',
        filter: 'agNumberColumnFilter',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PriceView price={data?.commission ?? 0} />
        ),
      },
      {
        field: 'paymentMethod',
        headerName: 'Method',
        width: 180,
        filter: 'agMultiColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        filterParams: {
          values: Object.values(CommissionDefault),
          valueFormatter: (params: any) => parseType(params.value),
          defaultToNothingSelected: true,
        } as ISetFilterParams<WeeklyCommission>,
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) => (
          <Stack direction="row" alignItems="center" spacing={1}>
            <LabelRenderer
              icon={
                data?.paymentMethod === CommissionDefault.Usdc
                  ? 'cryptocurrency:usdc'
                  : data?.paymentMethod === CommissionDefault.Hash
                    ? 'solar:wallet-money-bold'
                    : ''
              }
              color={
                data?.paymentMethod === CommissionDefault.Usdc
                  ? 'info'
                  : data?.paymentMethod === CommissionDefault.Txc
                    ? 'warning'
                    : 'success'
              }
              value={data?.paymentMethod!}
            />
            {data?.hasUSDC && data.paymentMethod === CommissionDefault.Usdc && (
              <Iconify icon="solar:check-circle-bold" width={20} color="success.main" />
            )}
          </Stack>
        ),
      },
      {
        field: 'commissionType',
        headerName: 'Type',
        width: 180,
        filter: 'agMultiColumnFilter',
        resizable: true,
        editable: false,
        filterParams: {
          values: Object.values(CommissionType),
          valueFormatter: (params: any) => commissionParseType(params.value),
          defaultToNothingSelected: true,
        } as ISetFilterParams<WeeklyCommission>,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) => (
          <Box display="flex">
            <LabelRenderer
              icon={data?.commissionType === CommissionType.Supernova ? 'solar:star-bold' : null}
              value={COMMISSION_TYPE[data?.commissionType!].value}
              color={COMMISSION_TYPE[data?.commissionType!].color as LabelColor}
            />
          </Box>
        ),
      },
      {
        field: 'paidAs',
        headerName: 'Paid as',
        width: 150,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <Box display="flex">
            <LabelRenderer
              icon={data?.paidAs ? 'solar:dollar-bold' : 'solar:routing-bold'}
              value={data?.paidAs ? 'Cash' : 'Hash'}
              color={data?.paidAs ? 'success' : 'secondary'}
            />
          </Box>
        ),
      },
      {
        field: 'note',
        headerName: 'Note',
        flex: 1,
        minWidth: 200,
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        filter: 'agTextColumnFilter',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
    ];

    return baseColDef;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AgGrid<BasicWeeklyCommission>
      gridKey="miner-commission-member-list"
      loading={loading}
      rowData={weeklyCommissions}
      columnDefs={colDefs}
      totalRowCount={rowCount}
      rowHeight={45}
    />
  );
}
