import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpUser: {
    name: "",
    surName: "",
    email: "",
    phone: "",
    password: "",
    passwordTwo: "",
  },
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    addSignUpForm: (state, { payload }) => {
      state.signUpUser.name = payload.name;
      state.signUpUser.surName = payload.surName;
      state.signUpUser.email = payload.email;
      state.signUpUser.phone = payload.phone;
      state.signUpUser.password = payload.password;
      state.signUpUser.passwordTwo = payload.passwordTwo;
      console.log(payload);
    },
  },
});
export const selectSignUp = (state) => state.signUp;
export const signUpReducer = signUpSlice.reducer;
export const { addSignUpForm } = signUpSlice.actions;
