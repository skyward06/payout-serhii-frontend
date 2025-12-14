import { useMemo, useEffect } from 'react';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Grid from '@mui/material/Unstable_Grid2';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import TableContainer from '@mui/material/TableContainer';

import { useQuery, type SortOrder } from 'src/routes/hooks';

import { ScrollBar } from 'src/components/ScrollBar';
import { LoadingScreen } from 'src/components/loading-screen';
import { useTable, TableHeadCustom, TablePaginationCustom } from 'src/components/Table';

import TableRow from './TableRow';
import { useFetchMemberStatistics } from '../useApollo';

import type { IMemberStatisticsTableFilters } from './types';

const TABLE_HEAD = [
  { id: 'issuedAt', label: 'Date', width: 200, sortable: true },
  { id: 'hashPower', label: 'Hash Power', width: 200, sortable: true },
  { id: 'reward', label: 'Rewarded TXC', width: 200, sortable: true },
  { id: 'percent', label: 'Percent', width: 130, sortable: true },
  { id: 'sent', label: 'Received', width: 130, sortable: true },
];

interface Props {
  id: string;
}

export default function BlocksTable({ id }: Props) {
  const table = useTable({ defaultDense: true });

  const [query, { setQueryParams: setQuery, setPage, setPageSize }] =
    useQuery<IMemberStatisticsTableFilters>();

  const { page = { page: 1, pageSize: 10 }, sort = { hashPower: 'asc' } } = query;

  const graphQuerySort = useMemo(() => {
    if (!sort) return undefined;

    return Object.entries(sort)
      .map(([key, value]) => `${value === 'asc' ? '' : '-'}${key}`)
      .join(',');
  }, [sort]);

  const { loading, rowCount, memberStatistics, fetchMemberStatistics } = useFetchMemberStatistics();

  useEffect(() => {
    fetchMemberStatistics({
      variables: {
        page: page && `${page.page},${page.pageSize}`,
        filter: { statisticsId: id },
        sort: graphQuerySort,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, id, fetchMemberStatistics]);

  return (
    <Grid container spacing={1}>
      <Card
        sx={{
          width: '100%',
          m: 0.5,
          mt: 2,
          borderRadius: 1.5,
        }}
      >
        <CardHeader title="Reward" sx={{ mb: 3 }} />
        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <ScrollBar>
            <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
              {loading ? (
                <LoadingScreen />
              ) : (
                <>
                  <TableHeadCustom
                    order={sort && sort[Object.keys(sort)[0]]}
                    orderBy={sort && Object.keys(sort)[0]}
                    headLabel={TABLE_HEAD}
                    rowCount={rowCount}
                    onSort={(currentId) => {
                      const isAsc = sort && sort[currentId] === 'asc';
                      const newSort = { [id]: isAsc ? 'desc' : ('asc' as SortOrder) };
                      setQuery({ ...query, sort: newSort });
                    }}
                  />
                  <TableBody>
                    {memberStatistics!.map((row) => (
                      <TableRow key={row!.id} row={row!} />
                    ))}
                  </TableBody>
                </>
              )}
            </Table>
          </ScrollBar>
        </TableContainer>

        <TablePaginationCustom
          count={loading ? 0 : rowCount!}
          page={loading ? 0 : page!.page - 1}
          rowsPerPage={page?.pageSize}
          onPageChange={(_, curPage) => {
            setPage(curPage + 1);
          }}
          onRowsPerPageChange={(event) => {
            setPageSize(parseInt(event.target.value, 10));
          }}
          //
          dense={table.dense}
          onChangeDense={table.onChangeDense}
        />
      </Card>
    </Grid>
  );
}
