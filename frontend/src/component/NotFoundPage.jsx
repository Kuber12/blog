import React from "react";
import { Helmet } from "react-helmet";
const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <h1
        style={{
          color: "red",
          position: "absolute",
          // textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        404 page Not Found
      </h1>
    </>
  );
};

export default NotFoundPage;
