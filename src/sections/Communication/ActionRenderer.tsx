import type { CustomCellRendererProps } from '@ag-grid-community/react';

import { memo } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/useBoolean';

import { Iconify } from 'src/components/Iconify';

import { CommunicationDetail } from './Detail';

import type { EmailRecipient } from './type';

export const ActionRender = memo(
  ({ data }: CustomCellRendererProps<EmailRecipient>) => {
    const open = useBoolean();

    return (
      <>
        {data?.isVisible ? (
          <Box display="flex" justifyContent="center">
            <Tooltip title="View" arrow placement="left">
              <IconButton size="small" color="default" onClick={open.onTrue}>
                <Iconify icon="flowbite:eye-outline" width={18} />
              </IconButton>
            </Tooltip>
          </Box>
        ) : null}

        {data?.id && open.value && <CommunicationDetail open={open} id={data?.id} />}
      </>
    );
  },
  (prev, next) => prev.data?.email === next.data?.email
);
