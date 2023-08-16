import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSignUpForm,
  selectSignUp,
} from "../store/signUpSlices/signUpSlices";
import axios from "axios";
import CryptoJS from "crypto-js";

function SignUpForm() {
  const dispatch = useDispatch();
  const signUpRef = useRef();
  const [error, setError] = useState();
  const { signUpUser, emailError, phoneError, passwordError } =
    useSelector(selectSignUp);

  const configs = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const addNameToApi = async () => {
    try {
      const apiUrl =
        "https://crudcrud.com/api/46cddb531d36456ea28733be7974e672/signup";
      const data = signUpUser;
      const response = await axios.post(apiUrl, data, configs);
      console.log("Name added successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding name:", error);
    }
  };

  function handleSignUp(e) {
    e.preventDefault();
    const HPass = CryptoJS.SHA256(signUpRef.current.passwordTwo.value).toString(
      CryptoJS.enc.Hex
    );
    const formData = {
      name: signUpRef.current.name.value,
      surName: signUpRef.current.surName.value,
      email: signUpRef.current.email.value,
      phone: signUpRef.current.phone.value,
      password: HPass,
    };

    dispatch(addSignUpForm(formData));

    if (
      formData.name &&
      formData.surName &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.passwordTwo
    ) {
      addNameToApi();
      // signUpRef.current.reset();
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
        <input
          type="email"
          placeholder={emailError ? emailError : "Email"}
          name="email"
        />
        <input
          type="text"
          placeholder={phoneError ? phoneError : "Phone"}
          name="phone"
        />
        <input
          type="password"
          placeholder={passwordError ? passwordError : "Password"}
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
