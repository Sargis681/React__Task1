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
  emailError: "",
  phoneError: "",
  passwordError: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    addSignUpForm: (state, { payload }) => {
      if (!isValidEmail(payload.email)) {
        state.emailError = "Invalid email";
      }

      if (!isValidPhone(payload.phone)) {
        state.phoneError = "Invalid phone number";
      }

      if (!isValidPassword(payload.password)) {
        state.passwordError = "Invalid password";
      }

      state.signUpUser.name = payload.name;
      state.signUpUser.surName = payload.surName;
      state.signUpUser.email = payload.email;
      state.signUpUser.phone = payload.phone;
      state.signUpUser.password = payload.password;
      state.signUpUser.passwordTwo = payload.passwordTwo;
    },
  },
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

function isValidPassword(password) {
  return password.length >= 4;
}

export const selectSignUp = (state) => state.signUp;
export const signUpReducer = signUpSlice.reducer;
export const { addSignUpForm } = signUpSlice.actions;
