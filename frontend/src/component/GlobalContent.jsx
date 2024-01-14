import React, { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();
const GlobalContentProvider = (props) => {
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    email: "",
    imgUrl: "",
  });
  useEffect(() => {
    const tokenData = sessionStorage.getItem("authToken");
    const data = JSON.parse(tokenData);
    setUser((prev) => ({ ...prev, username: data }));
  }, []);
  const info = {
    name: "Huri",
  };
  return (
    <>
      <GlobalContext.Provider value={user.username}>
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalContentProvider;
