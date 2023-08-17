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
        "https://crudcrud.com/api/58cdc3d1b1e4448aacda8e9f0e5d1783/signup";
      const response = await axios.post(apiUrl, signUpUser, configs);
      console.log("Name added successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding name:", error);
    }
  };

  function handleSignUp(e) {
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
          placeholder={emailError || "Email"} // Use logical OR to show the placeholder or the error message
          name="email"
        />
        <input
          type="text"
          placeholder={phoneError || "Phone"} // Use logical OR to show the placeholder or the error message
          name="phone"
        />
        <input
          type="password"
          placeholder={passwordError || "Password"} // Use logical OR to show the placeholder or the error message
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
