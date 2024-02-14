import { useState } from "react";
import axios from "axios";
function useFetch() {
  const baseUrl = "https://blog-backend-3dcg.onrender.com";
  async function fetchData(endpoint) {
    const url = `${baseUrl}${endpoint}`;
    console.log(url);
    try {
      const response = await axios.get(url);
      const data = await response.data.message;
      //   console.log("Blog api Blog data" + data);
      return data;
    } catch (execption) {
      console.log("Error while fetching blog data" + execption);
    }
  }
  async function searchFetch(endpoint) {
    const url = `${baseUrl}${endpoint}`;
    console.log(url);
    try {
      const response = await axios.get(url);
      const data = await response.data.message;
      console.log("BlogApi" + response);
      return data;
    } catch (execption) {
      console.log("Error while fetching searched blog data" + execption);
    }
  }
  return { fetchApiData: fetchData, searchApiData: searchFetch };
}
export default useFetch;
