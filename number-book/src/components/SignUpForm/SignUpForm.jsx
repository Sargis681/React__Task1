import React from "react";

function SignUpForm() {
  return (
    <div className="container__sign sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <div className="container__social">
          <a href="#" className="container__social-img">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="container__social-img">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#" className="container__social-img">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
