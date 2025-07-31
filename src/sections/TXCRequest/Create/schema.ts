import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  payment: zod.string().optional(),
  buy: zod.number().or(zod.string()).optional().nullable(),
  pay: zod.number().or(zod.string()).optional().nullable(),
  address: zod
    .string({ required_error: 'Wallet address is required' })
    .min(1, { message: 'Wallet address is required' }),
});
