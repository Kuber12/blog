import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NewNavi from "./NewwNav";
const Layout = () => {
  return (
    <div>
      <NewNavi />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
