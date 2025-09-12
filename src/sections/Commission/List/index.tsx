import type { LabelColor } from 'src/components/Label';
import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, ISetFilterParams, ITextFilterParams } from '@ag-grid-community/core';

import dayjs from 'dayjs';
import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { formatID } from 'src/utils/helper';
import { formatWeekNumber } from 'src/utils/format-time';

import { COMMISSION_TYPE, COMMISSION_STATUS } from 'src/consts';
import { CommissionType, CommissionDefault } from 'src/__generated__/graphql';

import { Label } from 'src/components/Label';
import { AgGrid } from 'src/components/AgGrid';
import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

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
        width: 150,
        resizable: true,
        editable: false,
        sortable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <>
            <Typography
              variant="body2"
              fontWeight={600}
            >{`week #${formatWeekNumber(data?.weekStartDate)}`}</Typography>
            <Typography variant="body2">{`${dayjs(data?.weekStartDate).utc().format('MM/DD')} - ${dayjs(data?.weekStartDate).utc().add(6, 'day').format('MM/DD')}`}</Typography>
          </>
        ),
      },
      {
        headerName: 'BegLR',
        width: 120,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) =>
          `L${data?.begL}, R${data?.begR}`,
      },
      {
        headerName: 'NewLR',
        width: 120,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) =>
          `L${data?.newL}, R${data?.newR}`,
      },
      {
        headerName: 'MaxLR',
        width: 120,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) =>
          `L${data?.maxL}, R${data?.maxR}`,
      },
      {
        headerName: 'Package',
        width: 120,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) =>
          data?.status !== COMMISSION_STATUS.NONE.label ? `L${data?.pkgL}, R${data?.pkgR}` : 'None',
      },
      {
        headerName: 'EndLR',
        width: 120,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center tabular-nums',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) =>
          `L${data?.endL}, R${data?.endR}`,
      },
      {
        field: 'commission',
        headerName: 'Commissions',
        width: 160,
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center tabular-nums ag-right-aligned-cell',
        filter: 'agNumberColumnFilter',
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
          <Stack direction="row" alignItems="center" spacing={2}>
            {data?.paymentMethod}

            {data?.hasUSDC && data.paymentMethod === CommissionDefault.Usdc && (
              <Iconify icon="ic:twotone-check-box" color="green" />
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
        cellClass: 'ag-cell-center',
        filterParams: {
          values: Object.values(CommissionType),
          valueFormatter: (params: any) => commissionParseType(params.value),
          defaultToNothingSelected: true,
        } as ISetFilterParams<WeeklyCommission>,
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) => (
          <Box>
            {data?.commissionType === CommissionType.Supernova && (
              <Label
                variant="soft"
                color={COMMISSION_TYPE[data?.commissionType!].color as LabelColor}
              >
                {COMMISSION_TYPE[data?.commissionType!].value}
              </Label>
            )}
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
