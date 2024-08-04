import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getChats } from '@/api/requests';
import type { RootState } from '@/store/store';

export const fetchGetChats = createAsyncThunk('chats/fetchGetChats', async (token: string) => {
  const response = await getChats({ config: { headers: { Authorization: `Bearer ${token}` } } });

  return response.data;
});

interface ChatsSliceTypes {
  chats: GetChats;
  error: boolean;
}
const initialState: ChatsSliceTypes = {
  chats: [],
  error: false
};

const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<GetChat>) => {
      state.chats = [...state.chats, { ...action.payload }];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetChats.fulfilled, (state, action: PayloadAction<GetChats>) => {
        state.chats = action.payload;
        state.error = false;
      })
      .addCase(fetchGetChats.rejected, (state) => {
        state.chats = [];
        state.error = true;
      });
  }
});

export const selectChats = (state: RootState) => state.chats;
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
