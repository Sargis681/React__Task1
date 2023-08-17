import axios from "axios";

const configs = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function useFetchUserData() {
  // Renamed the function
  async function fetchUserData() {
    try {
      const response = await axios.get(
        "https://crudcrud.com/api/58cdc3d1b1e4448aacda8e9f0e5d1783/signup"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  return [fetchUserData];
}
