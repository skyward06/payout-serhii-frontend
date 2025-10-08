import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/useBoolean';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import { useAuthContext } from 'src/auth/hooks';

import { SettingModal } from './SettingModal';
import { ActivateModal } from './ActivateModal';
import { useActivateMember } from '../../useApollo';

export function Setting() {
  const open = useBoolean();
  const active = useBoolean();
  const popover = usePopover();

  const { user } = useAuthContext();

  const { loading, activateMember } = useActivateMember();

  const handleActivate = () => {
    if (user?.memberWallets?.length) {
      if (user.country === 'United States of America') {
        active.onTrue();
        popover.onClose();
      } else {
        activateMember({});
      }
    } else {
      toast.error('Please add a wallet first');
    }
  };

  return (
    <>
      <IconButton onClick={popover.onOpen}>
        <Iconify icon="ant-design:setting-twotone" />
      </IconButton>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              open.onTrue();
              popover.onClose();
            }}
          >
            <Iconify icon="icon-park-twotone:communication" color="primary.main" />
            Communication
          </MenuItem>
          <MenuItem onClick={handleActivate}>
            <Iconify
              icon={loading ? 'eos-icons:bubble-loading' : 'icon-park-solid:check-one'}
              color="primary.main"
            />
            Activate
          </MenuItem>
        </MenuList>
      </CustomPopover>

      <SettingModal open={open} />
      <ActivateModal open={active} />
    </>
  );
}
