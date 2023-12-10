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
          {/* buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px",
              padding: " 20px 40px",
            }}
          >
            {/* top */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              {/* file  input */}
              <div>
                <label htmlFor="fileInput" className="custom-file-input">
                  Choose File
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }} />
              </div>
              {/* clear  button*/}
              <div>
                <button>Clear</button>
              </div>
              {/* select tags */}
              <div>
                <select name="" id="">
                  <option value="">News</option>
                  <option value="">Entertainment</option>
                </select>
              </div>
            </div>
            {/* bottom */}
            <div style={{ marginTop: "20px", alignSelf: "flex-start" }}>
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
