import { createSlice } from '@reduxjs/toolkit';
import { songsAPI } from '../../api/songApi';

const initialState = {
  songs: [],
  message: '',
  isLoading: false
};

const songSlice = createSlice({
  name: 'songs',

  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(songsAPI.findAll.fulfilled, (state, { payload }) => {
      state.songs = payload;
    });
  }
});

const { actions, reducer } = songSlice;
export default reducer;
