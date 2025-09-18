import type { CustomCellRendererProps } from '@ag-grid-community/react';

import { memo } from 'react';

import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { ReimbursementStatus } from 'src/__generated__/graphql';

import { Iconify } from 'src/components/Iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import type { BasicReimbursement } from '../List/type';

export const ActionRender = memo(
  ({ data }: CustomCellRendererProps<BasicReimbursement>) => {
    const router = useRouter();
    const popover = usePopover();

    return (
      <>
        <Box display="flex" justifyContent="center">
          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-horizontal-fill" />
          </IconButton>
        </Box>

        <CustomPopover
          open={popover.open}
          anchorEl={popover.anchorEl}
          onClose={popover.onClose}
          slotProps={{ arrow: { placement: 'right-top' } }}
        >
          <MenuList>
            <MenuItem
              onClick={() => {
                popover.onClose();
                router.push(paths.dashboard.reimbursement.edit(`${data?.id}`));
              }}
              disabled={
                !(
                  data?.status === ReimbursementStatus.Pending ||
                  data?.status === ReimbursementStatus.Approved
                )
              }
            >
              <Iconify icon="solar:pen-2-bold" />
              Edit
            </MenuItem>
          </MenuList>
        </CustomPopover>
      </>
    );
  },
  (prev, next) => prev.data?.id === next.data?.id
);
