import React from "react";
import "./AddBlog.css";
const AddBlog = () => {
  return (
    <div className="container-head">
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Add Blog</h1>
      <div className="addblog-container">
        <div className="title-input-container">
          <input
            type="text"
            className="title-input"
            placeholder="Enter Title"
          />
        </div>
        <div>
          <div class="form-floating container  ">
            <textarea
              class="form-control p-5"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style={{ width: "100%", height: "124px" }}
              // rows="5"
            ></textarea>
            <label for="floatingTextarea" style={{ paddingLeft: "2.18rem" }}>
              Comments
            </label>
          </div>
        </div>
        {/* buttons */}
        <div className="buttons-container">
          {/* top */}
          <div className="button-top-container">
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
                <option selected disabled value="">
                  Choose Your Tag
                </option>
                <option value="">News</option>
                <option value="">Entertainment</option>
              </select>
            </div>
          </div>
          {/* bottom */}
          <div style={{ marginTop: "20px", alignSelf: "flex-start" }}>
            <button type="submit">Post The Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
