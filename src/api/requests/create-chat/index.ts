import { api } from '@/api/instansc';

export type PostCreateChatParams = {
  id: string;
};

type PostCreateChatConfig = AxiosRequestConfig<PostCreateChatParams>;

export const postCreateChat = ({ params, config }: PostCreateChatConfig) =>
  api.post<string>('/create-chat', params, config);
