import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addSignInForm,
  selectSignIn,
} from "../store/signInSlices/signInSlices";
import axios from "axios";
import CryptoJS from "crypto-js";
import {
  filterUser,
  loginAdd,
  selectForm,
} from "../store/formSlices/formSlice";
import { useFetchUserData } from "../../hook/useApi"; // Updated import

function SignInForm() {
  const [fetchUserData] = useFetchUserData(); // Updated variable name
  console.log(fetchUserData);
  const { signInUser, emailValidationError } = useSelector(selectSignIn);
  const dispatch = useDispatch();
  const signInRef = useRef();
  const { user } = useSelector(selectForm);
  const navigate = useNavigate();

  function handleSignInChange(e) {
    e.preventDefault();

    const email = signInRef.current.email.value;
    const password = signInRef.current.password.value;

    if (email !== "" || password !== "") {
      const passwordHash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

      dispatch(addSignInForm({ email, password: passwordHash }));

      // const apiUrl =
      //   "https://crudcrud.com/api/58cdc3d1b1e4448aacda8e9f0e5d1783/signup";

      // axios
      //   .get(apiUrl)
      //   .then((response) => {
      //     let matchingUser = response.data.find(
      //       (el) => el.email === email && el.password === passwordHash
      //     );

      //     if (matchingUser) {
      //       localStorage.setItem("matchingUser", JSON.stringify(matchingUser));
      //       dispatch(loginAdd(matchingUser));
      //       navigate("/");
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
      const data = fetchUserData();
      data.then((data) => {
        let matchingUser = data.find(
          (el) => el.email === email && el.password === passwordHash
        );

        if (matchingUser) {
          localStorage.setItem("matchingUser", JSON.stringify(matchingUser));
          dispatch(loginAdd(matchingUser));
          navigate("/");
        }
      });

      // console.log(el)); // Updated function call

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
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
