import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

// Helpers
const isDigits = (s: string) => /^\d+$/.test(s);

const isValidAbaRouting = (s: string) => {
  if (s.length !== 9 || !isDigits(s)) return false;
  const d = s.split('').map((c) => Number(c));
  const sum = 3 * (d[0] + d[3] + d[6]) + 7 * (d[1] + d[4] + d[7]) + 1 * (d[2] + d[5] + d[8]);
  return sum % 10 === 0;
};

export const Schema = zod.object({
  accountNumber: zod.coerce
    .string({ required_error: 'Account Number is required' })
    .trim()
    .min(6, { message: 'Account Number must be at least 6 digits' })
    .max(17, { message: 'Account Number must be at most 17 digits' })
    .refine(isDigits, { message: 'Account Number must contain only digits' }),

  routingNumber: zod.coerce
    .string({ required_error: 'Routing Number is required' })
    .trim()
    .length(9, { message: 'Routing Number must be exactly 9 digits' })
    .refine(isDigits, { message: 'Routing Number must contain only digits' })
    .refine(isValidAbaRouting, { message: 'Routing Number is invalid (checksum failed)' }),

  amountInCent: zod
    .number({ required_error: 'Amount is required' })
    .min(1, { message: 'Amount must be greater than 0' }),

  bankName: zod
    .string({ required_error: 'Bank Name is required' })
    .trim()
    .min(1, { message: 'Bank Name must be at least 1 characters' }),

  name: zod
    .string({ required_error: 'Name is required' })
    .trim()
    .min(1, { message: 'Name must be at least 1 characters' }),

  sign: zod
    .string({ required_error: 'Signature is required' })
    .trim()
    .min(1, { message: 'Signature must be at least 1 characters' }),
});
