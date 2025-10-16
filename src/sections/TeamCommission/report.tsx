import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, ITextFilterParams } from '@ag-grid-community/core';
import type { WeeklyReport, TeamReportSection } from 'src/__generated__/graphql';

import dayjs from 'dayjs';
import { useMemo, useEffect } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { fCurrency } from 'src/utils/formatNumber';
import { parseFilterModel } from 'src/utils/parseFilter';
import { formatWeekNumber } from 'src/utils/format-time';

import { AgGrid } from 'src/components/AgGrid';
import { PointView } from 'src/components/Common';
import { IconRenderer } from 'src/components/ItemRenderers';

import { useFetchTeamCommission } from './useApollo';

import type { WeeklyCommission } from '../Commission/type';

type BasicWeeklyCommission = Omit<WeeklyCommission, 'hasUSDC'>;

interface Props {
  teamReport: TeamReportSection;
}

export default function Report({ teamReport }: Props) {
  const [{ page = '1,50', sort = '-createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { loading, rowCount, commissions, fetchTeamCommission } = useFetchTeamCommission();

  useEffect(() => {
    fetchTeamCommission({
      variables: { filter: graphQueryFilter, page, sort, teamReport },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphQueryFilter, page, sort, teamReport]);

  const colDefs = useMemo<ColDef<BasicWeeklyCommission>[]>(
    () => [
      {
        field: 'weekStartDate',
        headerName: 'Week',
        width: 250,
        filter: 'agDateColumnFilter',
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyReport>) => (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Chip
              label={`Week ${formatWeekNumber(data?.weekStartDate)}`}
              size="small"
              variant="soft"
              color="primary"
              sx={{ fontWeight: 600, minWidth: 70 }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {dayjs(data?.weekStartDate).utc().format('MMM DD')} -{' '}
              {dayjs(data?.weekStartDate).utc().add(6, 'day').format('MMM DD')}
            </Typography>
          </Stack>
        ),
      },
      {
        field: 'fullName',
        headerName: 'Full Name',
        width: 200,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <Typography variant="body2" fontWeight={500}>
            {data?.fullName}
          </Typography>
        ),
      },
      {
        field: 'username',
        headerName: 'Username',
        width: 220,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <IconRenderer icon="lucide:user-round" value={data?.username!} />
        ),
      },
      {
        headerName: 'Beginning L/R',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PointView leftValue={data?.begL || 0} rightValue={data?.begR || 0} />
        ),
      },
      {
        headerName: 'New L/R',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PointView leftValue={data?.newL || 0} rightValue={data?.newR || 0} />
        ),
      },
      {
        headerName: 'Max L/R',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PointView leftValue={data?.maxL || 0} rightValue={data?.maxR || 0} />
        ),
      },
      {
        headerName: 'Package L/R',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PointView leftValue={data?.pkgL || 0} rightValue={data?.pkgR || 0} />
        ),
      },
      {
        headerName: 'End L/R',
        width: 160,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <PointView leftValue={data?.endL || 0} rightValue={data?.endR || 0} />
        ),
      },
      {
        field: 'commission',
        headerName: 'Commission',
        width: 180,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Chip
              label={fCurrency(data?.commission)}
              size="small"
              color="primary"
              sx={{
                fontWeight: 600,
                minWidth: 90,
              }}
            />
          </Box>
        ),
      },
      {
        field: 'shortNote',
        headerName: 'Note',
        width: 320,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicWeeklyCommission>) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              py: 1,
            }}
          >
            <Typography
              variant="body2"
              color={data?.shortNote ? 'text.primary' : 'text.disabled'}
              fontStyle={data?.shortNote ? 'normal' : 'italic'}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {data?.shortNote || 'No note'}
            </Typography>
          </Box>
        ),
      },
    ],
    []
  );

  return (
    <AgGrid<BasicWeeklyCommission>
      gridKey="miner-team-commission-report-list"
      loading={loading}
      rowData={commissions}
      columnDefs={colDefs}
      totalRowCount={rowCount}
    />
  );
}
