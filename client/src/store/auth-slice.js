import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, fullName: "" },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    inputFullName(state, fullNameInput) {
      state.fullName = fullNameInput;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
