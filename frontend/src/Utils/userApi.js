import { useState } from "react";
import axios from "axios";
function fetchUserData(endpoint) {
  const baseUrl = "https://blog-backend-3dcg.onrender.com";
  //   const baseUrl = "http://localhost:5000";
  async function FromBlogUser(endpoint) {
    const url = `${baseUrl}${endpoint}`;
    // console.log(url);
    try {
      const response = await axios.get(url);
      const data = response.data.message;
      // console.log(data);
      return data;
    } catch (error) {
      console.log("Error while fetching user data from parameter" + error);
    }
  }
  return { FromBlogUser };
}
export default fetchUserData;
