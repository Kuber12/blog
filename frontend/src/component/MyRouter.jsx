import React, { useState } from "react";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User";
import NotFoundPage from "./NotFoundPage";
import Layout from "./Layout";
import Cards from "./Cards";
import CardsHome from "./CardsHome";
import CardsDetails from "./CardsDetails";
import DisplayEditBLog from "./DisplayEditBLog";
import Login from "./Login";
import OpenBlog from "./OpenBlog";
import GlobalContentProvider from "./GlobalContent";
import NewCard from "./NewCard";
import BlogsPage from "../pages/BlogsPage";
import BlogPageTag from "../pages/BlogPageTag";
const MyRouter = () => {
  return (
    <div>
      <GlobalContentProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" index element={<Home />}></Route>
              <Route path="/Blogs" element={<BlogsPage />}></Route>
              <Route path="/BlogPageTag/:tag" element={<BlogPageTag />}></Route>
            </Route>
            <Route path="AddBlog" element={<AddBlog />}></Route>
            <Route path="EditBlog/:id" element={<EditBlog />}></Route>
            <Route path="/*" element={<NotFoundPage />}></Route>
            <Route path="/cards" element={<Cards />}></Route>
            {/* <Route path="/SearchBar" element={<SearchBar />}></Route> */}
            <Route path="/cardsHome" element={<CardsHome />}></Route>
            <Route path="/cardsDetails/:id" element={<CardsDetails />}></Route>
            <Route
              path="/DisplayEditBLog/"
              element={<DisplayEditBLog />}
            ></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/OpenBlog/:id" element={<OpenBlog />}></Route>
            <Route path="/NewCard" element={<NewCard />}></Route>
            <Route path="/User" element={<User />}></Route>
          </Routes>
        </Router>
      </GlobalContentProvider>
    </div>
  );
};

export default MyRouter;
