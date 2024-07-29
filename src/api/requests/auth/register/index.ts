import { api } from '@/api/instansc';
import type { RegisterSchema } from '@/pages/AuthPages/constans/RegisterSchema';

export type PostRegisterParams = Omit<RegisterSchema, 'confirmPassword'>;

type PostRegisterConfig = AxiosRequestConfig<PostRegisterParams>;

export const postRegister = ({ params, config }: PostRegisterConfig) =>
  api.post<AuthSuccessAnswer>('/auth/register', params, config);
