import { useParams } from 'react-router-dom';
import { useQuery as useGraphQuery } from '@apollo/client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';

import { useQuery } from 'src/routes/hooks';

import { ScrollBar } from 'src/components/ScrollBar';
import {
  useTable,
  TableNoData,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/Table';

import { FETCH_MEMBER_STATISTICS_QUERY } from 'src/sections/Reward/query';

import { TableItemRow } from './TableRow';
import { LoadingContent } from './LoadingContent';

import type { IMemberStatisticsTableFilters } from '../../types';

const TABLE_HEAD = [
  { id: 'issuedAt', label: 'Date', width: 200, sortable: true },
  { id: 'hashPower', label: 'Hash Power', width: 200, sortable: true },
  { id: 'reward', label: 'Rewarded TXC', width: 200, sortable: true },
  { id: 'percent', label: 'Percent', width: 130, sortable: true },
  // { id: 'sent', label: 'Received', width: 120, sortable: true },
];

export default function MemberStatistics() {
  const { id: memberId } = useParams();

  const theme = useTheme();
  const table = useTable({ defaultDense: true });

  const [query, { setPage, setPageSize }] = useQuery<IMemberStatisticsTableFilters>();

  const { page = { page: 1, pageSize: 10 } } = query;

  const { loading, data } = useGraphQuery(FETCH_MEMBER_STATISTICS_QUERY, {
    variables: {
      page: page && `${page.page},${page.pageSize}`,
      filter: { memberId },
      sort: 'issuedAt',
    },
  });

  const tableData = data?.memberStatistics ?? { memberStatistics: [], total: 0 };

  const notFound = !tableData?.memberStatistics?.length;

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
        border: `1px solid ${alpha(theme.palette.divider, 0.12)}`,
        position: 'relative',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box width={6} height={24} bgcolor="primary.main" borderRadius={1} />
            <Typography variant="h6" fontWeight={600} color="text.primary">
              Reward History
            </Typography>
          </Stack>
        }
        sx={{
          pb: 2,
          px: 3,
          pt: 3,
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)} 0%, ${alpha(theme.palette.background.neutral, 0.4)} 100%)`,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
        }}
      />

      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <ScrollBar>
          {loading ? (
            <LoadingContent tableHead={TABLE_HEAD} />
          ) : (
            <Table
              size={table.dense ? 'small' : 'medium'}
              sx={{
                minWidth: 560,
                '& .MuiTableCell-root': {
                  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                  py: table.dense ? 1 : 1.5,
                },
                '& .MuiTableHead-root .MuiTableCell-root': {
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.neutral, 0.8)} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: theme.palette.text.secondary,
                  borderBottom: `2px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                },
                '& .MuiTableRow-root:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.04),
                  transition: 'all 0.2s ease-in-out',
                },
                '& .MuiTableRow-root': {
                  transition: 'all 0.2s ease-in-out',
                },
              }}
            >
              <TableHeadCustom
                headLabel={TABLE_HEAD}
                rowCount={loading ? 0 : tableData?.memberStatistics?.length}
              />
              <TableBody>
                {tableData.memberStatistics!.map((row) => (
                  <TableItemRow
                    key={row!.id}
                    row={row!}
                    selected={table.selected.includes(row!.id)}
                  />
                ))}

                <TableNoData
                  notFound={notFound}
                  sx={{
                    '& .MuiTableCell-root': {
                      borderBottom: 'none',
                    },
                  }}
                />
              </TableBody>
            </Table>
          )}
        </ScrollBar>
      </TableContainer>

      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.neutral, 0.3)} 0%, ${alpha(theme.palette.background.paper, 0.8)} 100%)`,
          borderTop: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
          px: 1,
        }}
      >
        <TablePaginationCustom
          count={loading ? 0 : tableData.total!}
          page={loading ? 0 : page!.page - 1}
          rowsPerPage={page?.pageSize}
          onPageChange={(_, curPage) => {
            setPage(curPage + 1);
          }}
          onRowsPerPageChange={(event) => {
            setPageSize(parseInt(event.target.value, 10));
          }}
          dense={table.dense}
          onChangeDense={table.onChangeDense}
          sx={{
            '& .MuiTablePagination-toolbar': {
              minHeight: 60,
            },
            '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
              color: theme.palette.text.secondary,
              fontWeight: 500,
            },
            '& .MuiIconButton-root': {
              borderRadius: 2,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
              },
            },
          }}
        />
      </Box>
    </Card>
  );
}
