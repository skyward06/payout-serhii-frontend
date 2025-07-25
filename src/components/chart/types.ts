import type { Props } from 'react-apexcharts';
import type { Theme, SxProps } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ChartProps = React.ComponentProps<'div'> &
  Pick<Props, 'type' | 'series' | 'options'> & {
    sx?: SxProps<Theme>;
    slotProps?: {
      loading?: SxProps<Theme>;
    };
    loading?: boolean;
  };

export type ChartBaseProps = Props;

export type ChartOptions = Props['options'];

export type ChartLoadingProps = {
  disabled?: boolean;
  sx?: SxProps<Theme>;
};
