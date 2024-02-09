import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import UserProfile from "./UserProfile";
import NewNavi from "./NewwNav";
import { GlobalContext } from "./GlobalContent";
const User = () => {
  const data = useContext(GlobalContext);
  const username = data.user.username;
  if (!username) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        <h1>Login First</h1>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>User Page</title>
      </Helmet>
      <NewNavi />
      <UserProfile />
    </div>
  );
};

export default User;
