import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInUser: {
    email: "",
    password: "",
  },
};
const signInSlice = createSlice({
  name: "signIn",
  initialState,

  reducers: {
    addSignInForm: (state, { payload }) => {
      state.signInUser.email = payload.email;
      state.signInUser.password = payload.password;
      console.log(payload);
    },
  },
});
export const selectSignIn = (state) => state.signIn;
export const sigInReducer = signInSlice.reducer;
export const { addSignInForm } = signInSlice.actions;
