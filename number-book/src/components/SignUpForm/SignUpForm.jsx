import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addSignUpForm } from "../store/signUpSlices/signUpSlices";

function SignUpForm() {
  const dispatch = useDispatch();
  const signUpRef = useRef();

  function handleSignUp(e) {
    e.preventDefault();
    dispatch(
      addSignUpForm({
        name: signUpRef.current.name.value,
        surName: signUpRef.current.surName.value,
        email: signUpRef.current.email.value,
        phone: signUpRef.current.phone.value,
        password: signUpRef.current.password.value,
        passwordTwo: signUpRef.current.passwordTwo.value, // Corrected line
      })
    );
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
