import { z as zod } from 'zod';

import { PAYMENT_METHOD_IDS } from 'src/consts';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod
  .object({
    firstName: zod
      .string({ required_error: 'First Name is required' })
      .min(1, { message: 'First Name is required' }),
    lastName: zod
      .string({ required_error: 'Last Name is required' })
      .min(1, { message: 'Last Name is required' }),
    uname: zod.string({ required_error: 'Username is required' }),
    email: zod
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email address is provided' }),
    mobile: zod.string(),
    city: zod.string(),
    zipCode: zod.string(),
    state: zod.string(),
    country: zod.string({ required_error: 'Country is required' }),
    primaryAddress: zod.string(),
    sponsorUsername: zod.string(),
    secondaryAddress: zod.string(),
    packageId: zod.string({ required_error: 'Package is required' }),
    paymentMethod: zod.string({ required_error: 'Payment Method is required' }),
    assetId: zod.string().optional().nullable(),
    note: zod.string().optional().nullable(),
    txcAddress: zod.string().optional().nullable(),
    paymentPeerCode: zod
      .string()
      .optional()
      .nullable()
      .refine((value) => !value || /^\d{6}$/.test(value), {
        message: 'Peer Code must be 6 digits',
      }),
  })
  .refine(
    (data) => {
      if (
        data.paymentMethod.split('::')[0] === PAYMENT_METHOD_IDS[1] &&
        (!data.paymentPeerCode || !/^\d{6}$/.test(data.paymentPeerCode))
      ) {
        return false;
      }
      return true;
    },
    {
      message: 'Peer Code must be exactly 6 digits when Peer Acceptable is enabled',
      path: ['peerCode'],
    }
  )
  .superRefine((data, ctx) => {
    if (data.country !== 'United States of America' && !data.txcAddress) {
      ctx.addIssue({
        path: ['txcAddress'],
        code: zod.ZodIssueCode.custom,
        message: 'TXC Address is required',
      });
    }
  });
