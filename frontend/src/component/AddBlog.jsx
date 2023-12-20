import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NewNav from "./NewNav";
import NewNavi from "./NewwNav";
import "./AddBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddBlog = (props) => {
  const [titleArea, settitleArea] = useState("Enter The Title");
  const [textArea, settextArea] = useState("Enter The Description");

  const navigation = useNavigate();  
  const [values, setValues] = useState({
    headline: "",
    content: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // const requestData = {
    //   message: [values], // Wrap values in a message array
    // };

    axios
      .post("http://localhost:5000/api/blog", values)
      .then((res) => {
        console.log("Submitted");
        navigation("/");
      })
      .catch((ex) => {
        console.log("Error", ex);
      });
  };

  return (
    <>
      <NewNavi />
      <div className="container-head">
        <Helmet>
          <title>Add Page</title>
        </Helmet>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Add Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="addblog-container">
            <div className="title-input-container">
              <input
                type="text"
                className="title-input"
                placeholder="Enter Title"
                onChange={(e) =>
                  setValues({ ...values, headline: e.target.value })
                }
              />
            </div>
            <div>
              <div className="form-floating container  ">
                <textarea
                  // onChange={handleTextArea}
                  
                  className="form-control p-5"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ width: "100%", height: "124px" }}
                  onChange={(e) =>
                    setValues({ ...values, content: e.target.value })
                  }
                  // rows="5"
                ></textarea>
                <label
                  htmlFor="floatingTextarea"
                  style={{ paddingLeft: "2.18rem" }}
                >
                  Contents
                </label>
              </div>
            </div>
            {/* buttons */}
            <div className="buttons-container">
              {/* top */}
              <div className="button-top-container">
                {/* file  input */}
                {/* <div>
                <label htmlFor="fileInput" className="custom-file-input">
                  Choose File
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }} />
              </div> */}
                
                {/* select tags */}
                <div>
                  {/* <select name="" id="">
                  <option disabled selected value="">
                    Choose Your Tag
                  </option>
                  <option value="">News</option>
                  <option value="">Entertainment</option>
                </select> */}
                </div>
              </div>
              {/* bottom */}
              <div style={{ marginTop: "20px", alignSelf: "flex-start" }}>
                <button className="postBlog" type="submit">
                  Post The Blog
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
