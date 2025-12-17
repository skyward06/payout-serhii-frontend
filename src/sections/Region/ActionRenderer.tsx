import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import { useSubscribeEmailRegion, useUnsubscribeEmailRegion } from '../Communication/useApollo';

interface Props {
  id: string;
  isSubscribed: boolean;
}

export function ActionRenderer({ id, isSubscribed }: Props) {
  const popover = usePopover();

  const { loading: subscribing, subscribeEmailRegion } = useSubscribeEmailRegion();
  const { loading: unsubscribing, unsubscribeEmailRegion } = useUnsubscribeEmailRegion();

  const handleUpdate = async () => {
    try {
      if (isSubscribed) {
        await unsubscribeEmailRegion(id);
        toast.success('Unsubscribed successfully');
      } else {
        await subscribeEmailRegion(id);
        toast.success('Subscribed successfully');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <IconButton onClick={popover.onOpen}>
        <Iconify icon="eva:more-horizontal-fill" width={20} height={20} />
      </IconButton>

      <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={popover.onClose}>
        <MenuList>
          <MenuItem disabled={isSubscribed} onClick={handleUpdate}>
            <Iconify
              icon={
                subscribing
                  ? 'eos-icons:bubble-loading'
                  : 'material-symbols:mark-email-read-rounded'
              }
              color="primary.main"
            />
            Subscribe
          </MenuItem>
          <MenuItem disabled={!isSubscribed} onClick={handleUpdate}>
            <Iconify
              icon={unsubscribing ? 'eos-icons:bubble-loading' : 'material-symbols:unsubscribe'}
              color="error.main"
            />
            Unsubscribe
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
