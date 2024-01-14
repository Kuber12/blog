import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const GlobalContentProvider = (props) => {
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    email: "",
    imgUrl: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenData = sessionStorage.getItem("authToken");
        const data = tokenData;
        // console.log(data);

        const res = await axios.get("http://localhost:5000/api/user/current", {
          headers: {
            Authorization: `Bearer ${data}`,
          },
        });
        const { username, name } = res.data;
        // console.log(res.data);
        console.log(res.data.username);
        setUser((prev) => ({ ...prev, username: username }));
        setUser((prev) => ({ ...prev, name: name }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <GlobalContext.Provider value={user}>
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalContentProvider;
