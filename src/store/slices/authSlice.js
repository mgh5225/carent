import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: null,
    isAuthenticated: false,
  },
  reducers: {
    setMe: (state, action) => {
      state.me = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = !!action.payload;
    },
  },
});

export const { setMe, setAuthenticated } = authSlice.actions;

export const reducer = authSlice.reducer;
