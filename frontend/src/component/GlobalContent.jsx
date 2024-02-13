/**
 * The above code is a React component that provides global context for user data and authentication
 * token.
 * @returns The GlobalContentProvider component is being returned.
 */
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const GlobalContentProvider = ({ children }) => {
  const [tokenData, setTokenData] = useState(
    sessionStorage.getItem("authToken") //base condition //data from login
  );
  const [tokencheck, setTokenCheck] = useState(
    sessionStorage.getItem("authToken") //set and get
  );
  const [user, setUser] = useState({
    id: "",
    username: "",
    fullname: "",
    email: "",
    imgUrl: "",
  });

  useEffect(() => {
    setTokenCheck(sessionStorage.setItem("authToken", tokenData));
  }, [tokenData]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/current", {
          headers: {
            Authorization: `Bearer ${tokenData ? tokenData : tokencheck}`,
          },
        });

        const { username, name, email, id } = res.data;

        setUser((prev) => ({ ...prev, username: username }));
        setUser((prev) => ({ ...prev, name: name }));
        setUser((prev) => ({ ...prev, email: email }));
        setUser((prev) => ({ ...prev, id: id }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [tokenData]);

  return (
    <>
      <GlobalContext.Provider
        value={{ user, setUser, tokenData, setTokenData }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalContentProvider;
