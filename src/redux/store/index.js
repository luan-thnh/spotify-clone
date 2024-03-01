import { configureStore } from '@reduxjs/toolkit';
import userSlice from './../slices/userSlice';
import songSlice from './../slices/songSlice';

export const store = configureStore({
  reducer: {
    users: userSlice,
    songs: songSlice
  }
});
