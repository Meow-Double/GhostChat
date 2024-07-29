import { api } from '@/api/instansc';

type GetMeConfig = AxiosRequestConfig;

export const getMe = ({ config }: GetMeConfig) => api.get<GetMeData>('/auth/me', config);
