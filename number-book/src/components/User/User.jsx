import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../store/formSlices/formSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function User() {
  const navigate = useNavigate();
  const userFromLocalStorage = JSON.parse(localStorage.getItem("matchingUser"));
  const [user, setUser] = useState(userFromLocalStorage);
  const { contacts } = useSelector(selectForm);
  console.log(contacts);
  function functionLogout() {
    const configs = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    async function addUserApi(contacts) {
      try {
        const apiUrl =
          "https://crudcrud.com/api/313686bbd9b042bca281bf4a7cf93ab9/signup";
        const response = await axios.post(apiUrl, contacts, configs);
        console.log("Name added successfully:", response.data);
        return response.data;
      } catch (error) {
        console.error("Error adding name:", error);
        throw error;
      }
    }

    localStorage.removeItem("matchingUser");
    navigate("/two");
  }

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/two");
  //   }
  // }, [user]);

  return (
    <div className="container__user">
      <span className="container__userName">
        {user?.name[0].toUpperCase() + user.name.slice(1)}
      </span>
      /
      <span className="container__logout" onClick={functionLogout}>
        Logout
      </span>
    </div>
  );
}

export default User;
