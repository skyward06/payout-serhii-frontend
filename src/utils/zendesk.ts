// Zendesk utility functions for dynamic theming

declare global {
  interface Window {
    zE?: any;
    zESettings?: {
      webWidget?: {
        color?: {
          theme?: string;
          launcherText?: string;
        };
        launcher?: {
          label?: { [key: string]: string };
        };
      };
    };
  }
}

/**
 * Update Zendesk widget colors dynamically
 * @param themeColor - The primary theme color (hex format)
 * @param launcherTextColor - The launcher text color (hex format, optional)
 */
export function updateZendeskColors(themeColor: string, launcherTextColor = '#ffffff') {
  // Check if Zendesk is loaded
  if (typeof window !== 'undefined' && window.zE) {
    try {
      // Update the widget appearance
      window.zE('webWidget', 'updateSettings', {
        webWidget: {
          color: {
            theme: themeColor,
            launcherText: launcherTextColor,
          },
        },
      });

      console.log(`Zendesk colors updated: theme=${themeColor}, text=${launcherTextColor}`);
    } catch (error) {
      console.warn('Failed to update Zendesk colors:', error);
    }
  } else if (typeof window !== 'undefined') {
    // If Zendesk is not yet loaded, set the initial configuration
    window.zESettings = {
      ...window.zESettings,
      webWidget: {
        ...window.zESettings?.webWidget,
        color: {
          theme: themeColor,
          launcherText: launcherTextColor,
        },
        launcher: {
          label: { '*': 'Support' },
        },
      },
    };

    console.log(`Zendesk pre-settings configured: theme=${themeColor}, text=${launcherTextColor}`);
  }
}

/**
 * Initialize Zendesk with specific colors
 * @param themeColor - The primary theme color (hex format)
 * @param launcherTextColor - The launcher text color (hex format, optional)
 */
export function initializeZendesk(themeColor: string, launcherTextColor = '#ffffff') {
  updateZendeskColors(themeColor, launcherTextColor);

  // Wait for Zendesk to load and apply colors again if needed
  if (typeof window !== 'undefined') {
    const checkZendesk = () => {
      if (window.zE) {
        updateZendeskColors(themeColor, launcherTextColor);
      } else {
        setTimeout(checkZendesk, 500);
      }
    };

    setTimeout(checkZendesk, 1000);
  }
}

/**
 * Get contrast text color based on background color
 * @param backgroundColor - The background color (hex format)
 * @returns '#ffffff' for dark backgrounds, '#000000' for light backgrounds
 */
export function getContrastTextColor(backgroundColor: string): string {
  // Remove # if present
  const hex = backgroundColor.replace('#', '');

  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return white for dark colors, black for light colors
  return luminance > 0.5 ? '#000000' : '#ffffff';
}
