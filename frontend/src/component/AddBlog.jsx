import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NewNav from "./NewNav";
import NewNavi from "./NewwNav";
import "./AddBlog.css";
const AddBlog = (props) => {
  const [titleArea, settitleArea] = useState("Enter The Title");
  const [textArea, settextArea] = useState("Enter The Description");

  const handleTitleArea = (event) => {
    settitleArea(event.target.value);
  };

  const handleTextArea = (event) => {
    settextArea(event.target.value);
  };

  const handleClearText = () => {
    settextArea("");
    settitleArea("");
  };
  return (
    <>
      <NewNavi />
      {/* <NewNav /> */}
      <div className="container-head">
        <Helmet>
          <title>Add Page</title>
        </Helmet>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Add Blog</h1>
        <div className="addblog-container">
          <div className="title-input-container">
            <input
              type="text"
              className="title-input"
              placeholder="Enter Title"
              value={titleArea}
              onChange={handleTitleArea}
            />
          </div>
          <div>
            <div className="form-floating container  ">
              <textarea
                value={textArea}
                onChange={handleTextArea}
                className="form-control p-5"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={{ width: "100%", height: "124px" }}
                // rows="5"
              ></textarea>
              <label
                htmlFor="floatingTextarea"
                style={{ paddingLeft: "2.18rem" }}
              >
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
                <button onClick={handleClearText}>Clear</button>
              </div>
              {/* select tags */}
              <div>
                <select name="" id="">
                  <option disabled selected value="">
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
    </>
  );
};

export default AddBlog;
