import type { Theme, SxProps } from '@mui/material/styles';

import React from 'react';

import Avatar from '@mui/material/Avatar';

interface Props {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function CustomAvatar({ children, sx }: Props) {
  return (
    <Avatar
      sx={{
        width: 64,
        height: 64,
        fontSize: 24,
        fontWeight: 'bold',
        bgcolor: 'primary.main',
        ...sx,
      }}
    >
      {children}
    </Avatar>
  );
}
