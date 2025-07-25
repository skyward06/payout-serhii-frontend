import type { BoxProps } from '@mui/material/Box';

import { lazy, Suspense } from 'react';

import Box from '@mui/material/Box';

import { ChartLoading } from './chart-loading';

import type { ChartProps } from './types';

// ----------------------------------------------------------------------

const LazyChart = lazy(() =>
  import('react-apexcharts').then((module) => ({ default: module.default }))
);

export function Chart({
  sx,
  type,
  series,
  height,
  loading,
  slotProps,
  options,
  width = '100%',
  ...other
}: BoxProps & ChartProps) {
  const renderFallback = () => <ChartLoading type={type} sx={slotProps?.loading} />;

  return (
    <Box
      dir="ltr"
      sx={{
        width,
        height,
        flexShrink: 0,
        borderRadius: 1.5,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Suspense fallback={renderFallback()}>
        {loading ? (
          renderFallback()
        ) : (
          <LazyChart type={type} series={series} options={options} width="100%" height="100%" />
        )}
      </Suspense>
    </Box>
  );
}
