import { configureStore } from '@reduxjs/toolkit';

import chatsReducer from './slices/chatsSlice/chatSlice';
import messagesReducer from './slices/messagesSlice/messagesSlice';
import profileReducer from './slices/profileSlice/profileSlice';
import userReducer from './slices/userSlice/userSlice';
import usersReducer from './slices/usersSlice/usersSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
