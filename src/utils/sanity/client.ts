import { createClient } from '@sanity/client';

import { CONFIG } from 'src/config';

export const client = createClient({
  projectId: '1s9yly1w',
  dataset: CONFIG.SANITY_SERVER,
  apiVersion: '2024-03-11',
  // Set to `true` for production environments
  useCdn: CONFIG.SANITY_SERVER === 'production',
});
