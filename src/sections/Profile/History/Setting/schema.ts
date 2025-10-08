import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  assetId: zod.string({ required_error: 'Coin ID is required' }).min(1, 'Coin ID is required'),
});
