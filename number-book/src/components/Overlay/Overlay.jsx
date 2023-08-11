import React from "react";

function container__overlayChild({ handleSignInClick, handleSignUpClick }) {
  return (
    <div className="container__overlay">
      <div className="container__overlayChild">
        <div className="container__overlayChild-panel container__overlayChild-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" id="signIn" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
        <div className="container__overlayChild-panel container__overlayChild-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start the journey with us</p>
          <button className="ghost" id="signUp" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default container__overlayChild;
