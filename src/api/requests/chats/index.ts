import { api } from '@/api/instansc';

type GetChatsConfig = AxiosRequestConfig;

export const getChats = ({ config }: GetChatsConfig) => api.get<GetChats>(`/chats`, config);
