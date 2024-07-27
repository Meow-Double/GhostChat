import * as z from 'zod';

import { validateEmail } from '../utils';

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(4, { message: 'Минимальная длина 4 символов' })
      .max(16, { message: 'Максимальная длина 16 символа' }),
    email: z
      .string()
      .min(6, { message: 'Минимальная длина 6 символов' })
      .max(40, { message: 'Максимальная длина 40 символов' })
      .refine((email) => validateEmail(email), { message: 'Некорректная почта' }),
    password: z
      .string()
      .min(6, { message: 'Минимальная длина 6 символов' })
      .max(16, { message: 'Максимальная длина 16 символа' }),
    confirmPassword: z.string().min(6, 'Повторите пароль')
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Введенные пароли не совпадают'
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
