import React, { useState } from "react";
import NavBar from "./NavBar";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import User from "./User";
const MyRouter = () => {
  const [isFooterVisible, setisFooterVisible] = useState(true);
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AddBlog" element={<AddBlog />}></Route>
          <Route path="/EditBlog" element={<EditBlog />}></Route>
          <Route path="/User" element={<User />}></Route>
        </Routes>
        {isFooterVisible && <Footer />}
      </Router>
    </div>
  );
};

export default MyRouter;