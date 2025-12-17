import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import { ScrollBar } from 'src/components/ScrollBar';
import { useTable, TableNoData, TableSkeleton, TableHeadCustom } from 'src/components/Table';

import { FETCH_SALES_STATS_QUERY } from 'src/sections/Sales/query';

import { EmailRegionTableRow } from './TableRow';
import { useFetchEmailRegionsWithUnsubscribe } from '../Communication/useApollo';

const TABLE_HEAD = [
  { id: 'region', label: 'Region', sortable: FETCH_SALES_STATS_QUERY },
  { id: 'description', label: 'Description', sortable: false },
  { id: 'Status', label: 'Unsubscribed', sortable: false },
  { id: 'unsubscribedAt', label: 'Unsubscribed At', sortable: false },
  { id: 'action', label: '', width: 50, sortable: false },
];

export function EmailRegionList() {
  const table = useTable({ defaultDense: true });

  const { loading, emailRegions } = useFetchEmailRegionsWithUnsubscribe();

  const notFound = !loading && emailRegions.length === 0;

  return (
    <Card>
      <ScrollBar>
        <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
          <TableHeadCustom headLabel={TABLE_HEAD} rowCount={loading ? 0 : emailRegions.length} />
          {loading ? (
            <TableSkeleton />
          ) : (
            <>
              {notFound ? (
                <TableNoData notFound={notFound} />
              ) : (
                <TableBody>
                  {emailRegions.map((region) => (
                    <EmailRegionTableRow key={region.id} row={region} />
                  ))}
                </TableBody>
              )}
            </>
          )}
        </Table>
      </ScrollBar>
    </Card>
  );
}
