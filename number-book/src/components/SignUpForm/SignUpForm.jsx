import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSignUpForm,
  selectSignUp,
} from "../store/signUpSlices/signUpSlices";
import axios from "axios";

function SignUpForm() {
  const dispatch = useDispatch();
  const signUpRef = useRef();
  const { signUpUser } = useSelector(selectSignUp);
  console.log(signUpUser);
  const configs = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const addNameToApi = async () => {
    try {
      const apiUrl =
        "https://crudcrud.com/api/11593cb0a8c841ab8eaf4eaa1b01927f/signup";
      const data = signUpUser;
      const response = await axios.post(apiUrl, data, configs);
      console.log("Name added successfully:", response.data);
    } catch (error) {
      console.error("Error adding name:", error);
    }
  };

  useEffect(() => {
    addNameToApi();
  }, [signUpUser]); // Run the effect whenever signUpUser changes

  function handleSignUp(e) {
    e.preventDefault();
    const formData = {
      name: signUpRef.current.name.value,
      surName: signUpRef.current.surName.value,
      email: signUpRef.current.email.value,
      phone: signUpRef.current.phone.value,
      password: signUpRef.current.password.value,
      passwordTwo: signUpRef.current.passwordTwo.value,
    };

    dispatch(addSignUpForm(formData));
  }

  return (
    <div className="container__sign sign-up-container">
      <form ref={signUpRef} onSubmit={handleSignUp}>
        <h1>Create Account</h1>
        <div className="container__social"></div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="SurName" name="surName" />
        <input type="email" placeholder="Email" name="email" />
        <input type="text" placeholder="Phone" name="phone" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder="Confirm Password"
          name="passwordTwo"
        />

        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
