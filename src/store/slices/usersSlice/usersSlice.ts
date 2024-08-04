import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUsers } from '@/api/requests/users';
import type { RootState } from '@/store/store';

interface ParamsTypes {
  skip?: number;
  limit?: number;
  title?: string;
}

interface FetchUsersParams {
  token: string;
  params?: ParamsTypes;
}
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ token, params }: FetchUsersParams) => {
    const response = await getUsers({
      config: {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          ...params
        }
      }
    });

    return response.data;
  }
);

interface UsersSliceTypes {
  users: GetUser[];
  error: boolean;
}
const initialState: UsersSliceTypes = {
  users: [],
  error: false
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<GetUsers>) => {
      state.users = action.payload.users;
      state.error = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.users = [];
      state.error = true;
    });
  }
});

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
