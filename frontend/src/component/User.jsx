/**
 * The User component is a React component that displays the user's profile if they are logged in,
 * otherwise it displays a message to login first.
 * @returns The User component is returning a JSX element. If the username is not available, it returns
 * a div with a "Login First" message. Otherwise, it returns a div containing the Helmet component,
 * NewNavi component, and UserProfile component.
 */
import React, { useContext, useState } from "react";
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
