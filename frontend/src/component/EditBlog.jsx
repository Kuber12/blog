import React from "react";
import { Helmet } from "react-helmet";
import NewNav from "./NewNav";
const EditBlog = () => {
  return (
    <div>
      <NewNav />
      <Helmet>
        <title>Edit Page</title>
      </Helmet>
      <h1>Edit</h1>
    </div>
  );
};

export default EditBlog;
