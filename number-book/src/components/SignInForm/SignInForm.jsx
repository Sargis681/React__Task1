import React from "react";

function SignInForm() {
  return (
    <div className="container__sign sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <div className="container__social">
          <a href="#" className="container__social-img"></a>
          <a href="#" className="container__social-img"></a>
          <a href="#" className="container__social-img"></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
