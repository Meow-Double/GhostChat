import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUser } from '@/api/requests/user';
import type { RootState } from '@/store/store';

export const fetchUser = createAsyncThunk('user/fetchUser', async (id: string) => {
  const response = await getUser({ id });

  return response.data;
});

interface UsersSliceTypes {
  user: GetUser | null;
  error: boolean;
}
const initialState: UsersSliceTypes = {
  user: null,
  error: false
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<GetUser>) => {
      state.user = action.payload;
      state.error = false;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.user = null;
      state.error = true;
    });
  }
});

export const selectUsers = (state: RootState) => state.profile;

export default profileSlice.reducer;
