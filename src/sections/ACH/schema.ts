import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  checkNumber: zod.coerce.string({ required_error: 'Check Number is required' }).trim().optional(),

  name: zod
    .string({ required_error: 'Name is required' })
    .trim()
    .min(1, { message: 'Name is required' }),

  sign: zod
    .string({ required_error: 'Signature is required' })
    .trim()
    .min(1, { message: 'Signature is required' }),
});
