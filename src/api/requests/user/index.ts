import { api } from '@/api/instansc';

interface GetUserParams {
  id: string;
}

type GetUserConfig = AxiosRequestConfig & GetUserParams;

export const getUser = ({ id, config }: GetUserConfig) => api.get<GetUser>(`/user/${id}`, config);
