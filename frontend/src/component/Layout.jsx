import React from "react";
import NewNav from "./NewNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <NewNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
