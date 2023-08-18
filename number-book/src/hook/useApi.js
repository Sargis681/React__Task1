// useApi.js
import axios from "axios";

export function useFetchUserData() {
  const configs = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const Api =
    "https://crudcrud.com/api/313686bbd9b042bca281bf4a7cf93ab9/signup";

  async function addNameToApi(signUpUser) {
    try {
      const apiUrl = Api;

      const response = await axios.post(apiUrl, signUpUser, configs);
      console.log("Name added successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding name:", error);
      throw error;
    }
  }

  async function fetchUserData() {
    try {
      const apiUrl = Api;
      const response = await axios.get(apiUrl);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  return [fetchUserData, addNameToApi];
}
