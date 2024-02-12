/**
 * The above code is a React component for a 404 page not found error message.
 * @returns The NotFoundPage component is being returned.
 */
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
