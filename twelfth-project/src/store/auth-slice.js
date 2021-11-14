import { createSlice } from "@reduxjs/toolkit";

const initialAutHState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialAutHState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;