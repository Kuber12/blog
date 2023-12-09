import React from "react";
import NavBar from "./NavBar";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const MyRouter = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AddBlog" element={<AddBlog />}></Route>
          <Route path="/EditBlog" element={<EditBlog />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default MyRouter;
