import { toast } from 'sonner';
import { useMemo } from 'react';

import { TextField, IconButton, InputAdornment } from '@mui/material';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { CONFIG } from 'src/config';

import { useAuthContext } from 'src/auth/hooks';

import { Iconify } from '../Iconify';

export function PersonalLink() {
  const { copy } = useCopyToClipboard();
  const { user } = useAuthContext();

  const referralLink = useMemo(
    () => `${CONFIG.SITE_PATH}/intro#sign-up?sponsor=${user?.username}`,
    [user]
  );

  const onCopy = () => {
    if (referralLink) {
      copy(referralLink);
      toast.success('Copied');
    }
  };

  return (
    <TextField
      size="small"
      fullWidth
      disabled
      value={referralLink}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onCopy} edge="end">
              <Iconify icon="bxs:copy" width={20} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
