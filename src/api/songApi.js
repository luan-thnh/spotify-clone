import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axiosClient';

const tracksUri = [
  'spotify:track:3YctJXK6kznnWl68TnYobN',
  'spotify:track:6ofqi64OnweM4Ohe1pYMO3',
  'spotify:track:7jLSThU5Kg1RWt19Leiaxm',
  'spotify:track:06vgE0jEVMmbLFM623T7LH',
  'spotify:track:7kpNUrBDYDoX6QKGzrBD1R',
  'spotify:track:1K3CXUYKhLYN7koLW5WQjX'
];

export const songsAPI = {
  findAll: createAsyncThunk('songs/findAll', async (playlist) => {
    try {
      const { items } = await axiosClient.get('/me/top/tracks?time_range=long_term&limit=10');

      return items;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  })
};
