import { api } from '@/api/instansc';

interface GetChatUserParams {
  id: string;
}
type GetChatUserConfig = AxiosRequestConfig & GetChatUserParams;

export const getChatUser = ({ id, config }: GetChatUserConfig) =>
  api.get<GetChatMessages>(`/chat-user/${id}`, config);
