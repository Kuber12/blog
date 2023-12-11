import React, { useState } from "react";
import NavBar from "./NavBar";
import NewNav from "./NewNav";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import User from "./User";

const MyRouter = () => {
  const [isFooterVisible, setisFooterVisible] = useState(true);

  // getting data from nav and showing or hiding
  // const [dataFromChild, setDataFromChild] = useState(null);
  const handeDataFromChild = (data) => {
    console.log("Data received from child:", data);
    setisFooterVisible(data);
  };
  const data = (h) => {
    console.log(h);
  };
  return (
    <div>
      <Router>
        {/* <NewNav sentDataToParent={handeDataFromChild} /> */}
        <NewNav sentDataToParent={handeDataFromChild} selected="selected" />
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
