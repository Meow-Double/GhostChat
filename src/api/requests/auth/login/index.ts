import { api } from '@/api/instansc';
import type { LoginSchema } from '@/pages/AuthPages/constans/LoginSchema';

export type PostLoginParams = LoginSchema;

type PostLoginConfig = AxiosRequestConfig<PostLoginParams>;

export const postLogin = ({ params, config }: PostLoginConfig) =>
  api.post<AuthSuccessAnswer>('/auth/login', params, config);
