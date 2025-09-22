import { useEffect } from 'react';

import { useTheme } from '@mui/material/styles';

import { updateZendeskColors, getContrastTextColor } from 'src/utils/zendesk';

/**
 * Custom hook to synchronize Zendesk widget colors with the current theme
 * @param customColor - Optional custom color to override theme primary color
 * @param enabled - Whether to enable automatic color updates (default: true)
 */
export function useZendeskTheme(customColor?: string, enabled = true) {
  const theme = useTheme();

  useEffect(() => {
    if (!enabled) return;

    // Get the primary color from theme or use custom color
    const primaryColor = customColor || theme.palette.primary.main;

    // Get appropriate text color based on the primary color
    const textColor = getContrastTextColor(primaryColor);

    // Update Zendesk colors
    updateZendeskColors(primaryColor, textColor);
  }, [theme.palette.primary.main, customColor, enabled]);

  // Return function to manually update colors
  const updateColors = (color?: string, textColor?: string) => {
    const finalColor = color || customColor || theme.palette.primary.main;
    const finalTextColor = textColor || getContrastTextColor(finalColor);
    updateZendeskColors(finalColor, finalTextColor);
  };

  return {
    updateColors,
    currentThemeColor: theme.palette.primary.main,
  };
}
