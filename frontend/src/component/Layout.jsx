import React from "react";
import NewNav from "./NewNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NewNavi from "./NewwNav";
const Layout = () => {
  return (
    <div>
      <NewNavi />
      {/* <NewNav /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
