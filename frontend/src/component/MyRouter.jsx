/* The code you provided is a React component called `MyRouter`. It is responsible for defining the
routes and rendering the corresponding components based on the URL path. */
import React, { useState } from "react";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
import Home from "./Home";
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
import SearchContentProvider from "../pages/SearchContentProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserFromBlog from "./UserFromBlog";
const MyRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/Blogs", element: <BlogsPage /> },
        { path: "/BlogPageTag/:tag", element: <BlogPageTag /> },
        { path: "/UserInfo/:UserName", element: <UserFromBlog /> },
      ],
    },
    {
      path: "AddBlog",
      element: <AddBlog />,
    },
    {
      path: "EditBlog/:id",
      element: <EditBlog />,
    },
    {
      path: "/*",
      element: <NotFoundPage />,
    },
    {
      path: "/cards",
      element: <Cards />,
    },
    {
      path: "/cardsHome",
      element: <CardsHome />,
    },
    {
      path: "/cardsDetails/:id",
      element: <CardsDetails />,
    },
    {
      path: "/DisplayEditBLog/",
      element: <DisplayEditBLog />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    { path: "/OpenBlog/:id", element: <OpenBlog /> },
    { path: "/NewCard", element: <NewCard /> },
    { path: "/User", element: <User /> },
  ]);
  return (
    <div>
      <GlobalContentProvider>
        <SearchContentProvider>
          <RouterProvider router={router} />
        </SearchContentProvider>
      </GlobalContentProvider>
    </div>
  );
};

export default MyRouter;
