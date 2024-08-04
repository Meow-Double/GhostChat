import { api } from '@/api/instansc';

export type PostAddMessageConfigParams = {
  sendId: string;
  message: string;
  chatId: string;
};

type PostAddMessageConfig = AxiosRequestConfig<PostAddMessageConfigParams>;

export const postAddMessage = ({ params, config }: PostAddMessageConfig) =>
  api.post<MessgaeType>('/add-message', params, config);
