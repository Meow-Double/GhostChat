import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { PostRegisterParams } from '@/api/requests';
import { postRegister } from '@/api/requests';
import type { RootState } from '@/store/store';

import type { UserTypes } from './userTypes';

export const fetchRegister = createAsyncThunk(
  'user/fetchRegister',
  async (userData: PostRegisterParams) => {
    const response = await postRegister({ params: { ...userData } });

    return response.data;
  }
);

const initialState: UserTypes = {
  name: '',
  email: '',
  token: null,
  error: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.fulfilled, (state, action: PayloadAction<RegisterAnswer>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.error = true;
    });
  }
});

export const selectUser = (state: RootState) => state.user;

// export const {} = userSlice.actions;

export default userSlice.reducer;
