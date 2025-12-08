import { z as zod } from 'zod';

import { COUNTRY } from 'src/consts';
import { PlacementPosition } from 'src/__generated__/graphql';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod
  .object({
    firstName: zod.string({ required_error: 'First Name is required' }),
    lastName: zod.string({ required_error: 'Last Name is required' }),
    uname: zod.string({ required_error: 'Username is required' }),
    email: zod
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email address is provided' }),
    primaryAddress: zod.string(),
    secondaryAddress: zod.string(),
    assetId: zod.string().optional().nullable(),
    country: zod.string({ required_error: 'Country is required' }),
    paymentType: zod.string({ required_error: 'Payment Type is required' }),
    commissionDefault: zod.string({ required_error: 'Commission Default is required' }),
    city: zod.string(),
    mobile: zod.string(),
    zipCode: zod.string(),
    state: zod.string(),
    giftCode: zod.string().optional().nullable(),
    txcAddress: zod.string().optional().nullable(),
    placementParentId: zod.string().optional().nullable(),
    placementPosition: zod
      .enum([PlacementPosition.Left, PlacementPosition.Right, PlacementPosition.None])
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.country !== COUNTRY.USA && !data.txcAddress) {
      ctx.addIssue({
        path: ['txcAddress'],
        code: zod.ZodIssueCode.custom,
        message: 'TXC Address is required',
      });
    }
  });
