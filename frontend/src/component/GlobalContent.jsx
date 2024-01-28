import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const GlobalContentProvider = ({ children }) => {
  const [tokenData, setTokenData] = useState(null);
  const [user, setUser] = useState({
    id: "",
    username: "",
    fullname: "",
    email: "",
    imgUrl: "",
  });
  // console.log(tokenData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const tokenData = sessionStorage.getItem("authToken");
        // const data = tokenData;
        // console.log(data);

        const res = await axios.get("http://localhost:5000/api/user/current", {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        });
        // console.log(tokenData);
        const { username, name, email, id } = res.data;
        // console.log(res.data);
        // console.log(res.data.username);

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
      <GlobalContext.Provider value={{ user, tokenData, setTokenData }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalContentProvider;
