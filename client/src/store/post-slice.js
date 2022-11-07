import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: { post: "" },
  reducers: {
    inputPost(state, postInput) {
      state.userPost = postInput;
    },
  }
});

export const postActions = postSlice.actions;

export default postSlice;
