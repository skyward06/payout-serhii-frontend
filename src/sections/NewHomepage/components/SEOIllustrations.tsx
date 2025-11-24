import type { SvgIconProps } from '@mui/material/SvgIcon';

import SvgIcon from '@mui/material/SvgIcon';

import { CONFIG } from 'src/config';
import { BackgroundShape } from 'src/assets/illustrations/background-shape';

// ----------------------------------------------------------------------

type SvgProps = SvgIconProps & { hideBackground?: boolean };

export function SeoIllustration({ hideBackground, sx, ...other }: SvgProps) {
  const renderCharacterImage = () => (
    <image
      href={`${CONFIG.site.basePath}/assets/images/texitcoin-key.png`}
      height="280"
      x="120"
      y="40"
    />
  );

  return (
    <SvgIcon
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      sx={[
        (theme) => ({
          '--primary-light': theme.vars.palette.primary.light,
          '--primary-dark': theme.vars.palette.primary.dark,
          width: 320,
          maxWidth: 1,
          flexShrink: 0,
          height: 'auto',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {!hideBackground && <BackgroundShape />}

      {renderCharacterImage()}
    </SvgIcon>
  );
}
