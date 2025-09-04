import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  payToAddress: zod
    .string({ required_error: 'Pay to address is required' })
    .min(1, 'Pay to address is required'),
  description: zod.string().optional(),
  requestedAmountInCent: zod.number({ required_error: 'Amount is required' }).min(1),
});
