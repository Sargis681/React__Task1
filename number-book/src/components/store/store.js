import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./formSlices/formSlice";
import { sigInReducer } from "./signInSlices/signInSlices";
import { signUpReducer } from "./signUpSlices/signUpSlices";

const store = configureStore({
  reducer: {
    form: formReducer,
    signIn: sigInReducer,
    signUp: signUpReducer,
  },
});

export default store;
