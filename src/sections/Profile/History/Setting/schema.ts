import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  communication: zod.boolean().default(true),
});

export type ActivateSchemaType = zod.infer<typeof ActivateSchema>;

export const ActivateSchema = zod.object({
  assetId: zod.string({ required_error: 'Asset ID is required' }).min(1, 'Asset ID is required'),
});
