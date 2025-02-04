import { z } from 'zod';

import { STATE_OPTIONS } from './constants';

const states = STATE_OPTIONS.map(option => option.value);

export const accountSchema = z
  .object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    signature_details: z.string().optional(),
    username: z.string().min(1, 'Username is required'),
    npi: z.string().optional(),
    organization: z.string().optional(),
    work_phone: z.string().optional(),
    fax: z.string().optional(),
    address_line1: z.string().optional(),
    address_line2: z.string().optional(),
    city: z.string().optional(),
    state: z.enum([...states] as [string, ...string[]]).optional(),
    zip: z.string().optional(),
    current_password: z.string().optional(),
    new_password: z
      .string()
      .optional()
      .refine(val => !val || val.length >= 8, 'Password must be at least 8 characters')
      .refine(val => !val || /[A-Z]/.test(val), 'Password must contain an uppercase letter')
      .refine(val => !val || /[0-9]/.test(val), 'Password must contain a number'),
    confirm_password: z.string().optional(),
  })
  .refine(
    data => {
      if (data.new_password || data.current_password || data.confirm_password) {
        return data.new_password === data.confirm_password && data.current_password;
      }
      return true;
    },
    {
      message: "Passwords don't match or current password is missing",
      path: ['confirm_password'],
    }
  );

export const passwordSchema = z
  .object({
    current_password: z.string().min(1, 'Current password is required'),
    new_password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain an uppercase letter')
      .regex(/[0-9]/, 'Password must contain a number'),
    confirm_password: z.string(),
  })
  .refine(data => data.new_password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password'],
  });
