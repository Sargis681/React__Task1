// SignUpForm.js
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSignUpForm,
  selectSignUp,
} from "../store/signUpSlices/signUpSlices";
import CryptoJS from "crypto-js";
import { useFetchUserData } from "../../hook/useApi";

function SignUpForm() {
  const dispatch = useDispatch();
  const signUpRef = useRef();
  const [error, setError] = useState();
  const { signUpUser, emailError, phoneError, passwordError } =
    useSelector(selectSignUp);
  const [fetchUserData, addNameToApi] = useFetchUserData();

  async function handleSignUp(e) {
    e.preventDefault();
    const passwordHash = CryptoJS.SHA256(
      signUpRef.current.passwordTwo.value
    ).toString(CryptoJS.enc.Hex);

    const formData = {
      name: signUpRef.current.name.value,
      surName: signUpRef.current.surName.value,
      email: signUpRef.current.email.value,
      phone: signUpRef.current.phone.value,
      password: passwordHash,
    };

    dispatch(addSignUpForm(formData));

    if (
      formData.name &&
      formData.surName &&
      formData.email &&
      formData.phone &&
      formData.password
    ) {
      try {
        console.log(signUpUser);
        await addNameToApi(signUpUser);

        // signUpRef.current.reset();
      } catch (error) {
        setError("An error occurred while adding the name.");
      }
    }
  }

  return (
    <div className="container__sign sign-up-container">
      <form ref={signUpRef} onSubmit={handleSignUp}>
        <h1>Create Account</h1>
        <div className="container__social"></div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="SurName" name="surName" />
        <input type="email" placeholder={emailError || "Email"} name="email" />
        <input type="text" placeholder={phoneError || "Phone"} name="phone" />
        <input
          type="password"
          placeholder={passwordError || "Password"}
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="passwordTwo"
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
