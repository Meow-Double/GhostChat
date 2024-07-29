import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { PostLoginParams, PostRegisterParams } from '@/api/requests';
import { postLogin, postRegister } from '@/api/requests';
import { getMe } from '@/api/requests/auth/me';
import type { RootState } from '@/store/store';

import type { UserTypes } from './userTypes';

export const fetchRegister = createAsyncThunk(
  'user/fetchRegister',
  async (userData: PostRegisterParams) => {
    const response = await postRegister({ params: { ...userData } });

    return response.data;
  }
);

export const fetchLogin = createAsyncThunk('user/fetchLogin', async (userData: PostLoginParams) => {
  const response = await postLogin({ params: { ...userData } });

  return response.data;
});

export const fetchGetMe = createAsyncThunk('user/fetchGetMe', async (token: string) => {
  const response = await getMe({
    config: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  });

  return { token, data: response.data };
});

const initialState: UserTypes = {
  name: '',
  email: '',
  avatarUrl: 'http://localhost:4000/uploads/randomAvatarka/img1.jpg',
  token: null,
  error: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.fulfilled, (state, action: PayloadAction<AuthSuccessAnswer>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.avatarUrl = action.payload.avatarUrl;
      state.token = action.payload.token;
      state.error = false;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.email = '';
      state.name = '';
      state.token = '';
      state.error = true;
    });
    // ------------------------------------------------------------------------------------------------
    builder.addCase(fetchLogin.fulfilled, (state, action: PayloadAction<AuthSuccessAnswer>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.avatarUrl = action.payload.avatarUrl;
      state.token = action.payload.token;
      state.error = false;
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.email = '';
      state.name = '';
      state.token = '';
      state.error = true;
    });
    // ------------------------------------------------------------------------------------------------
    builder.addCase(
      fetchGetMe.fulfilled,
      (state, action: PayloadAction<{ token: string; data: GetMeData }>) => {
        state.email = action.payload.data.email;
        state.name = action.payload.data.name;
        state.avatarUrl = action.payload.data.avatarUrl;
        state.token = action.payload.token;
        state.error = false;
      }
    );
    builder.addCase(fetchGetMe.rejected, (state) => {
      state.email = '';
      state.name = '';
      state.token = '';
      state.error = true;
    });
  }
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
