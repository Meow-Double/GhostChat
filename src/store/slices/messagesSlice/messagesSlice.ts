import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { PostAddMessageConfigParams } from '@/api/requests/add-messages';
import { postAddMessage } from '@/api/requests/add-messages';
import { getChatUser } from '@/api/requests/chat-user';
import type { RootState } from '@/store/store';

export const fetchGetChatUsers = createAsyncThunk(
  'messages/fetchGetChatUsers',
  async (id: string) => {
    const response = await getChatUser({ id });

    return response.data;
  }
);
interface FetchAddMessageParams {
  token: string;
  params: PostAddMessageConfigParams;
}
export const fetchAddMessage = createAsyncThunk(
  'messages/fetchAddMessage',
  async ({ params, token }: FetchAddMessageParams) => {
    const response = await postAddMessage({
      params,
      config: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    });

    return response.data;
  }
);

interface ChatUserSliceTypes {
  messages: GetChatMessages;
  error: boolean;
}
const initialState: ChatUserSliceTypes = {
  messages: [],
  error: false
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<MessgaeType>) => {
      state.messages = [...state.messages, { ...action.payload }];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetChatUsers.fulfilled, (state, action: PayloadAction<GetChatMessages>) => {
        state.messages = action.payload;
        state.error = false;
      })
      .addCase(fetchGetChatUsers.rejected, (state) => {
        state.messages = [];
        state.error = true;
      });
    //   ------------------------------------------------------------------------------
    builder
      .addCase(fetchAddMessage.fulfilled, (state, action: PayloadAction<MessgaeType>) => {
        state.messages = [...state.messages, action.payload];
        state.error = false;
      })
      .addCase(fetchAddMessage.rejected, (state) => {
        state.error = true;
      });
  }
});

export const selectMessages = (state: RootState) => state.messages;

export const { setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
