import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../store/formSlices/formSlice";
import { useNavigate } from "react-router-dom";
function User() {
  const navigate = useNavigate();
  const userFromLocalStorage = JSON.parse(localStorage.getItem("matchingUser"));
  const [user, setUser] = useState(userFromLocalStorage);
  function functionLogout() {
    localStorage.removeItem("matchingUser");
    navigate("/two");
  }

  useEffect(() => {
    if (!user) {
      navigate("/two");
    }
  }, [user]);

  return (
    <div>
      <span>{user?.name}</span>/<span onClick={functionLogout}>Logout</span>
    </div>
  );
}

export default User;
