import type { ChangeEvent } from 'react';
import type { AgGridReactProps } from '@ag-grid-community/react';
import type {
  GridState,
  FilterModel,
  GridReadyEvent,
  SortChangedEvent,
  ColumnResizedEvent,
  FilterChangedEvent,
} from '@ag-grid-community/core';

import isEqual from 'lodash/isEqual';
import { useRef, useMemo, useCallback } from 'react';

import { AgGridReact } from '@ag-grid-community/react';
import { themeQuartz, iconSetQuartzLight } from '@ag-grid-community/theming';

import { SetFilterModule } from '@ag-grid-enterprise/set-filter';

import Box from '@mui/material/Box';

import { useAgQuery } from 'src/routes/hooks';

import { debounce } from 'src/utils/lodash';

import { Pagination } from './Pagination';
import { useSettingsContext } from '../settings';
import { SkeletonLoader } from './SkeletonLoader';
import { ClientSideRowModelModule } from './ClientSideRowModel';

interface Props<TData = any> extends AgGridReactProps<TData> {
  /** The key to save column order and width to local-storage */
  gridKey: string;

  /** Total row counts */
  totalRowCount?: number;
}

export const AgGrid = <TData,>(props: Props<TData>) => {
  const { gridKey, totalRowCount, pagination = true, modules, ...restProps } = props;

  const { colorScheme } = useSettingsContext();

  const gridRef = useRef<AgGridReact<TData>>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);

  const [query, { setPage, setPageSize, setSort, setFilter }] = useAgQuery<FilterModel>();
  const { pageModel = { page: 1, pageSize: 50 }, sortModel, filter } = query;

  const agGridTheme = useMemo(
    () =>
      colorScheme === 'light'
        ? themeQuartz.withPart(iconSetQuartzLight).withParams({
            backgroundColor: '#ffffff',
            browserColorScheme: 'light',
            columnBorder: false,
            fontFamily: 'Arial',
            foregroundColor: 'rgb(46, 55, 66)',
            headerBackgroundColor: '#F9FAFB',
            headerFontSize: 14,
            headerFontWeight: 600,
            headerTextColor: '#919191',
            oddRowBackgroundColor: '#F9FAFB',
            rowBorder: false,
            sidePanelBorder: false,
            spacing: 8,
            wrapperBorder: false,
            wrapperBorderRadius: 0,
          })
        : themeQuartz.withParams({
            accentColor: '#15BDE8',
            backgroundColor: '#0C0C0D',
            borderColor: '#ffffff00',
            borderRadius: 20,
            browserColorScheme: 'dark',
            chromeBackgroundColor: {
              ref: 'backgroundColor',
            },
            columnBorder: false,
            fontFamily: 'Arial',
            foregroundColor: '#BBBEC9',
            headerBackgroundColor: '#182226',
            headerFontSize: 14,
            headerFontWeight: 600,
            headerTextColor: '#FFFFFF',
            rowBorder: false,
            sidePanelBorder: false,
            spacing: 8,
            wrapperBorder: false,
            wrapperBorderRadius: 0,
          }),
    [colorScheme]
  );

  const initialState = useMemo<GridState>(
    () => {
      const columnWidth = localStorage.getItem(gridKey);

      return {
        partialColumnState: true,
        filter: { filterModel: filter },
        sort: sortModel && { sortModel },
        ...(columnWidth && { columnSizing: { columnSizingModel: JSON.parse(columnWidth) } }),
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const loadingOverlayComponentParams = useMemo(() => ({ gridWrapperRef }), []);

  const onGridReady = useCallback((event: GridReadyEvent<TData>) => {}, []);

  const onColumnResized = useCallback(
    (event: ColumnResizedEvent<TData>) => {
      if (event.finished) {
        localStorage.setItem(
          gridKey,
          JSON.stringify(
            event.api.getColumnState().map(({ colId, width, flex }) => ({ colId, width, flex }))
          )
        );
      }
    },
    [gridKey]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFilterChange = useCallback(
    debounce((value) => {
      setFilter(value);
    }, 500),
    [setFilter]
  );

  const onFilterChange = useCallback(
    (event: FilterChangedEvent<TData>) => {
      const currentFilterModel = event.api.getFilterModel();
      if (!isEqual(currentFilterModel, filter)) {
        debouncedFilterChange(currentFilterModel);
      }
    },
    [filter, debouncedFilterChange]
  );

  const onSortChanged = useCallback(
    ({ api }: SortChangedEvent<TData>) => {
      const colState = api.getColumnState();
      const sortState = colState
        .filter((s) => s.sort)
        .sort((a, b) => a.sortIndex! - b.sortIndex!)
        .map((s) => ({ colId: s.colId, sort: s.sort! }));
      if (!isEqual(sortState, sortModel)) {
        setSort(sortState);
      }
    },
    [sortModel, setSort]
  );

  const onPageChange = useCallback(
    (event: any, newPage: number) => {
      setPage(newPage + 1);
    },
    [setPage]
  );

  const onRowsPerPageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPageSize(parseInt(event.target.value, 10));
    },
    [setPageSize]
  );

  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Box flexGrow={1} ref={gridWrapperRef}>
        <AgGridReact<TData>
          {...restProps}
          ref={gridRef}
          modules={[...(modules ?? []), ClientSideRowModelModule, SetFilterModule]}
          theme={agGridTheme}
          initialState={initialState}
          onGridReady={onGridReady}
          onColumnResized={onColumnResized}
          onFilterChanged={onFilterChange}
          onSortChanged={onSortChanged}
          pagination={false} // Explicitly disable pagination
          loadingOverlayComponent={SkeletonLoader}
          loadingOverlayComponentParams={loadingOverlayComponentParams}
        />
      </Box>
      {pagination && (
        <Pagination
          count={totalRowCount!}
          page={pageModel.page - 1}
          rowsPerPage={pageModel.pageSize}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    </Box>
  );
};
