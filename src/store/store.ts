import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './slices/profileSlice/profileSlice';
import userReducer from './slices/userSlice/userSlice';
import usersReducer from './slices/usersSlice/usersSlice';

const store = configureStore({
  reducer: { user: userReducer, users: usersReducer, profile: profileReducer }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
