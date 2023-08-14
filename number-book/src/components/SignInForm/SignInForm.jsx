import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSignInForm,
  selectSignIn,
} from "../store/signInSlices/signInSlices";

function SignInForm() {
  const { signInUser } = useSelector(selectSignIn);
  console.log(signInUser);
  const dispatch = useDispatch();
  const signInRef = useRef();
  function handleSignInChange(e) {
    e.preventDefault();
    dispatch(
      addSignInForm({
        email: signInRef.current.email.value,
        password: signInRef.current.password.value,
      })
    );
    signInRef.current.reset();
  }
  return (
    <div className="container__sign sign-in-container">
      <form ref={signInRef} onSubmit={handleSignInChange} action="#">
        <h1>Sign in</h1>
        <div className="container__social"></div>
        <span>or use your account</span>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
