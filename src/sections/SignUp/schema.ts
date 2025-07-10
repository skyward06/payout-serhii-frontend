import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  firstName: zod.string({ required_error: 'First Name is required' }),
  lastName: zod.string({ required_error: 'Last Name is required' }),
  uname: zod.string({ required_error: 'Username is required' }),
  email: zod
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address is provided' }),
  mobile: zod.string(),
  city: zod.string(),
  zipCode: zod.string(),
  state: zod.string(),
  country: zod.string(),
  primaryAddress: zod.string(),
  sponsorUsername: zod.string(),
  secondaryAddress: zod.string(),
  paymentMethod: zod.string({ required_error: 'Payment Method is required' }),
  assetId: zod.string().optional().nullable(),
  note: zod.string().optional().nullable(),
});
