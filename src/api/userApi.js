import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axiosClient';

export const usersAPI = {
  find: createAsyncThunk('users/find', async (playlist) => {
    try {
      const { id: user_id } = await axiosClient.get(`/me`);

      return user_id;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  }),

  findAll: createAsyncThunk('users/findAll', async (playlist) => {
    try {
      const usersRes = await axiosClient.get(
        `/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`
      );

      console.log({ usersRes });

      return usersRes;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  })
};
