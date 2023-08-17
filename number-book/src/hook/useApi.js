import axios from "axios";

const configs = {
  headers: {
    "Content-Type": "application/json",
  },
};
export function useAxios() {
  async function addNameToApi({ signUpUser }) {
    try {
      const apiUrl =
        "https://crudcrud.com/api/58cdc3d1b1e4448aacda8e9f0e5d1783/signup";
      const response = await axios.post(apiUrl, signUpUser, configs);
      console.log("Name added successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding name:", error);
    }
  }

  async function useApi() {
    try {
      const response = await axios.get(
        "https://crudcrud.com/api/2cd46c994ce44a4b9e5832ac2b54d7c6/signup"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  return [useApi, addNameToApi];
}
