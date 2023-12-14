import React, { useState } from "react";
// import NavBar from "./NavBar";
import NewNav from "./NewNav";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import User from "./User";
import NotFoundPage from "./NotFoundPage";
import Layout from "./Layout";
import Cards from "./Cards";
import CardsHome from "./CardsHome";
import SearchBar from "./SearchBar";
const MyRouter = () => {
  const [isFooterVisible, setisFooterVisible] = useState(true);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />}></Route>
            <Route path="User" element={<User />}></Route>
          </Route>
          <Route path="AddBlog" element={<AddBlog />}></Route>
          <Route path="EditBlog" element={<EditBlog />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
          <Route path="/cards" element={<Cards />}></Route>
          <Route path="/SearchBar" element={<SearchBar />}></Route>
          <Route path="/cardsHome" element={<CardsHome />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default MyRouter;
