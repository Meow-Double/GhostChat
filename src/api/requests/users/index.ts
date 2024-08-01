import { api } from '@/api/instansc';

type GetUsersConfig = AxiosRequestConfig;

export const getUsers = ({ config }: GetUsersConfig) => api.get<GetUsers>('/users', config);
