import React from "react";
import NavBar from "./NavBar";
import AddBlog from "./AddBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const MyRouter = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/AddBlog" element={<AddBlog />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default MyRouter;
