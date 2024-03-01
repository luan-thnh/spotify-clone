import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  userCurrent: {},
  message: '',
  isLoading: false
};

const userSlice = createSlice({
  name: 'users',

  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

const { actions, reducer } = userSlice;
export default reducer;
