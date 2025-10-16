import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { customizeFullName } from 'src/utils/helper';

import { PriceView } from './PriceView';
import { CustomAvatar } from './CustomAvatar';

import type { TopEarnerItem } from './type';

interface Props {
  index: number;
  isUnit?: boolean;
  description: string;
  item: TopEarnerItem;
}

export function ItemRow({ index, item, description, isUnit = false }: Props) {
  const theme = useTheme();

  const getMedalConfig = (row: number) => {
    const configs = [
      {
        gradient: `linear-gradient(135deg, ${theme.palette.warning.light} 0%, ${theme.palette.warning.main} 100%)`,
        iconGradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        bgGradient: `linear-gradient(135deg, ${alpha(theme.palette.warning.lighter, 0.24)} 0%, ${alpha(theme.palette.warning.light, 0.08)} 100%)`,
        borderColor: theme.palette.warning.main,
        shadowColor: alpha(theme.palette.warning.main, 0.24),
        icon: 'solar:crown-bold',
        label: '1ST',
      },
      {
        gradient: `linear-gradient(135deg, ${theme.palette.info.light} 0%, ${theme.palette.info.main} 100%)`,
        iconGradient: 'linear-gradient(135deg, #E8E8E8 0%, #9E9E9E 100%)',
        bgGradient: `linear-gradient(135deg, ${alpha(theme.palette.info.lighter, 0.24)} 0%, ${alpha(theme.palette.info.light, 0.08)} 100%)`,
        borderColor: theme.palette.info.main,
        shadowColor: alpha(theme.palette.info.main, 0.24),
        icon: 'solar:medal-star-bold',
        label: '2ND',
      },
      {
        gradient: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
        iconGradient: 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)',
        bgGradient: `linear-gradient(135deg, ${alpha(theme.palette.secondary.lighter, 0.24)} 0%, ${alpha(theme.palette.secondary.light, 0.08)} 100%)`,
        borderColor: theme.palette.secondary.main,
        shadowColor: alpha(theme.palette.secondary.main, 0.24),
        icon: 'solar:cup-star-bold',
        label: '3RD',
      },
    ];
    return configs[row] || null;
  };
  const medalConfig = getMedalConfig(index);
  const earnedValue = parseFloat(String(item?.earned || item?.totalIntroducers || 0));
  const isTopThree = index < 3;

  return (
    <Stack
      direction="row"
      alignItems="center"
      position="relative"
      p={2}
      spacing={2}
      borderRadius={1}
      border={`1px solid ${
        isTopThree && medalConfig
          ? alpha(medalConfig.borderColor, 0.24)
          : alpha(theme.palette.divider, 0.08)
      }`}
      sx={{
        background:
          isTopThree && medalConfig
            ? medalConfig.bgGradient
            : alpha(theme.palette.background.neutral, 0.4),
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <CustomAvatar
        index={index}
        avatarPath={item?.avatar!}
        isTopThree={isTopThree}
        medalConfig={medalConfig}
      />

      <Stack flex={1}>
        <Typography variant="subtitle1" noWrap fontWeight={isTopThree ? 600 : 500}>
          {customizeFullName(item.fullName)}
        </Typography>
      </Stack>

      <PriceView
        price={earnedValue}
        isTopThree={isTopThree}
        medalConfig={medalConfig}
        description={description}
        isUnit={isUnit}
      />
    </Stack>
  );
}
