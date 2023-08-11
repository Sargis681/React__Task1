import React, { useState } from "react";
import "./LoginPage.css";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import Overlay from "../Overlay/Overlay";

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="container__login">
      <div
        className={`container__any ${isSignUp ? "container__active" : ""}`}
        id="container"
      >
        <SignUpForm />
        <SignInForm />
        <Overlay
          handleSignInClick={handleSignInClick}
          handleSignUpClick={handleSignUpClick}
        />
      </div>
    </div>
  );
}

export default LoginPage;
