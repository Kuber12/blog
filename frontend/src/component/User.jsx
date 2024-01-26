import React from "react";
import { Helmet } from "react-helmet";
import UserProfile from "./UserProfile";
import NewNavi from "./NewwNav";
const User = () => {
  return (
    <div>
      <Helmet>
        <title>User Page</title>
      </Helmet>
      <NewNavi/>
      <UserProfile/>
    </div>
  );
};

export default User;
