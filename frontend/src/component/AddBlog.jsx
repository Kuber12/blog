import React from "react";
import "./AddBlog.css";
const AddBlog = () => {
  return (
    <div>
      <h1>Add Blog</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          //   justifyContent: "center",
          //   alignItems: "center",
          backgroundColor: "purple",
          margin: "0 auto",
        }}
      >
        <div style={{ margin: "50px", backgroundColor: "blue" }}>
          <input
            type="text"
            style={{ padding: "10px 20px", width: "100%" }}
            placeholder="Enter Title"
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="110"
            rows="auto"
            placeholder="Description"
            style={{ padding: "20px" }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
