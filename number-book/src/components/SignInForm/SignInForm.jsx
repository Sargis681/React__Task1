import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addSignInForm,
  selectSignIn,
} from "../store/signInSlices/signInSlices";
import axios from "axios";
import { loginAdd, selectForm } from "../store/formSlices/formSlice";

function SignInForm() {
  const { signInUser, emailValidationError } = useSelector(selectSignIn);
  console.log(signInUser);
  const dispatch = useDispatch();
  const signInRef = useRef();
  const { user } = useSelector(selectForm);
  console.log(user);
  const navigate = useNavigate();

  function handleSignInChange(e) {
    e.preventDefault();

    const email = signInRef.current.email.value;
    const password = signInRef.current.password.value;

    if (email !== "" || password !== "") {
      dispatch(addSignInForm({ email, password }));

      const apiUrl =
        "https://crudcrud.com/api/d35eb6b5cda0482e8a27e7a29d06d1f3/signup"; // Replace with the actual API URL

      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response.data);
          let matchingUser = response.data.find(
            (el) => el.email === email && el.password === password
          );

          console.log(matchingUser);
          if (matchingUser) {
            dispatch(loginAdd([matchingUser]));
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      signInRef.current.reset();
    }
  }

  return (
    <div className="container__sign sign-in-container">
      <form ref={signInRef} onSubmit={handleSignInChange} action="#">
        <h1>Sign in</h1>
        <div className="container__social"></div>
        <span>or use your account</span>
        <input
          type="email"
          name="email"
          placeholder={emailValidationError ? emailValidationError : "email"}
        />
        {/* {emailValidationError ? <span>{emailValidationError}</span> : ""} */}
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
