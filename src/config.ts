import { paths } from './routes/paths';
import packageJson from '../package.json';

// ----------------------------------------------------------------------

export type ConfigValue = {
  site: {
    name: string;

    basePath: string;
    version: string;
  };
  WS_PATH: string;
  SITE_PATH: string;
  SITE_URL: string;
  SERVER_BASE: string;
  SERVER_URL: string;
  ASSET_URL: string;
  redirectPath: string;
  storageTokenKey: string;
  IFRAME_RESIZER_LICENSE_KEY: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  site: {
    name: 'MineTXC',
    basePath: import.meta.env.VITE_BASE_PATH ?? '',
    version: packageJson.version,
  },
  WS_PATH: import.meta.env.VITE_WS_PATH ?? '',
  SITE_PATH: import.meta.env.VITE_SITE_PATH ?? '',
  SITE_URL: import.meta.env.VITE_BASE_URL ?? '',
  SERVER_BASE: import.meta.env.VITE_BASE_URL ?? '',
  SERVER_URL: import.meta.env.VITE_SERVER_URL ?? '',
  ASSET_URL: import.meta.env.VITE_ASSET_URL ?? '',
  IFRAME_RESIZER_LICENSE_KEY: import.meta.env.VITE_IFRAME_RESIZER_LICENSE_KEY ?? '',
  redirectPath: paths.pages.intro.root,
  storageTokenKey: 'token',
};
