import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInUser: {
    email: "",
    password: "",
  },
  emailValidationError: "",
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,

  reducers: {
    addSignInForm: (state, { payload }) => {
      const { email, password } = payload;

      // Email validation logic
      if (!isValidEmail(email)) {
        state.emailValidationError = "Invalid email address";
      } else {
        state.emailValidationError = "";
        state.signInUser.email = email;
        state.signInUser.password = password;
      }
    },
  },
});

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const selectSignIn = (state) => state.signIn;
export const sigInReducer = signInSlice.reducer;
export const { addSignInForm } = signInSlice.actions;
