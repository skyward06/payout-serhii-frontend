import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';

import type { MedalConfigType } from './type';

interface Props {
  index: number;
  avatarPath: string;
  isTopThree: boolean;
  medalConfig: MedalConfigType;
}

export function CustomAvatar({ index, avatarPath, isTopThree, medalConfig }: Props) {
  const theme = useTheme();

  return (
    <Box
      className="avatar-wrapper"
      sx={{ position: 'relative', flexShrink: 0 }}
      aria-label={isTopThree ? `Rank ${index + 1} medal` : undefined}
    >
      <Avatar
        src={avatarPath ?? `${CONFIG.SITE_PATH}/assets/avatar.jpg`}
        alt="avatar"
        sx={{
          width: 48,
          height: 48,
          bgcolor:
            isTopThree && medalConfig
              ? alpha(medalConfig.borderColor, 0.16)
              : alpha(theme.palette.primary.main, 0.08),
          border: `3px solid ${
            isTopThree && medalConfig ? medalConfig.borderColor : alpha(theme.palette.divider, 0.24)
          }`,
          boxShadow:
            isTopThree && medalConfig
              ? `0 0 0 4px ${alpha(medalConfig.borderColor, 0.12)}`
              : 'none',
          color: theme.palette.text.primary,
        }}
      />

      <Box
        position="absolute"
        top={-6}
        right={-6}
        minWidth={20}
        height={20}
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={theme.palette.common.white}
        border={`1px solid ${theme.palette.background.paper}`}
        boxShadow={
          isTopThree && medalConfig
            ? `0 4px 12px ${alpha(medalConfig.borderColor, 0.4)}, 0 0 0 2px ${theme.palette.background.paper}`
            : `0 2px 8px ${alpha(theme.palette.common.black, 0.24)}, 0 0 0 2px ${theme.palette.background.paper}`
        }
        sx={{
          background:
            isTopThree && medalConfig
              ? medalConfig.gradient
              : `linear-gradient(135deg, ${alpha(theme.palette.grey[500], 0.9)} 0%, ${alpha(theme.palette.grey[600], 0.9)} 100%)`,
        }}
      >
        {isTopThree && medalConfig ? (
          <Iconify icon={medalConfig.icon} sx={{ width: 14, height: 14 }} />
        ) : (
          <Typography variant="caption" fontWeight={600}>
            {index + 1}
          </Typography>
        )}
      </Box>

      {isTopThree && medalConfig && (
        <Chip
          size="small"
          label={medalConfig.label}
          sx={{
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            height: 18,
            fontSize: 8,
            fontWeight: 800,
            borderRadius: 1,
            background: medalConfig.iconGradient,
            color: theme.palette.common.white,
            boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.32)}`,
            border: `1px solid ${alpha(theme.palette.common.white, 0.24)}`,
            '& .MuiChip-label': {
              px: 0.5,
              letterSpacing: 0.5,
            },
          }}
        />
      )}
    </Box>
  );
}
