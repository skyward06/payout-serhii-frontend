import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, IDateFilterParams, ITextFilterParams } from '@ag-grid-community/core';

import { useMemo, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { formatDate } from 'src/utils/format-time';
import { parseFilterModel } from 'src/utils/parseFilter';
import { formatID, customizeFullName } from 'src/utils/helper';

import { AgGrid } from 'src/components/AgGrid';
import { IconRenderer, LabelRenderer } from 'src/components/ItemRenderers';

import { useFetchSponsors } from 'src/sections/TeamCommission/useApollo';

import type { Introducer } from './type';

interface Props {
  filter: any;
}

export default function SPonsorListView({ filter: customFilter }: Props) {
  const { loading, introducers, rowCount, fetchSponsors } = useFetchSponsors();
  const [{ page = '1,50', sort = 'createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(
    () => parseFilterModel({ ...customFilter }, filter),
    [filter, customFilter]
  );

  useEffect(() => {
    fetchSponsors({ variables: { filter: graphQueryFilter, page, sort } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphQueryFilter, page, sort]);

  const colDefs = useMemo<ColDef<Introducer>[]>(
    () => [
      {
        field: 'ID',
        headerName: 'ID',
        width: 180,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<Introducer>) => (
          <LabelRenderer icon="solar:user-id-bold" value={formatID(data?.ID!)} color="primary" />
        ),
      },
      {
        field: 'username',
        headerName: 'Username',
        flex: 1,
        minWidth: 150,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<Introducer>) => (
          <IconRenderer icon="lucide:user-round" value={data?.username} />
        ),
      },
      {
        field: 'fullName',
        headerName: 'Full Name',
        flex: 1,
        minWidth: 150,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<Introducer>) =>
          customizeFullName(data?.fullName ?? ''),
      },
      {
        field: 'point',
        headerName: 'Point',
        width: 200,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<Introducer>) => (
          <Box display="flex" justifyContent="flex-end">
            <LabelRenderer icon="solar:star-bold" value={`${data?.point}`} color="secondary" />
          </Box>
        ),
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 250,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<Introducer>) => (
          <IconRenderer icon="lineicons:calendar-days" value={formatDate(data?.createdAt)} />
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Card
      sx={{
        flexGrow: 1,
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <AgGrid<Introducer>
        gridKey="miner-sponsor-list"
        loading={loading}
        rowData={introducers}
        columnDefs={colDefs}
        totalRowCount={rowCount}
      />
    </Card>
  );
}
