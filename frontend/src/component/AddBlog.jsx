import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NewNavi from "./NewwNav";
import "./AddBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const navigation = useNavigate();
  const [file, setFile] = useState(null);
  const [values, setValues] = useState({
    headline: "",
    content: "",
    image: "",
    tag: "",
  });
  const token = sessionStorage.getItem("authToken");
  // console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };

  const handleFile = (e) => {
    // console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Check if a file is selected
      let tempFilename;
      if (file) {
        const formData = new FormData();
        formData.append("fileInput", file);

        const imgResponse = await axios.post(
          "http://localhost:5000/api/file/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
          config
        );

        tempFilename = imgResponse.data.fileName;
        console.log("Image Submitted", tempFilename);

        setValues((values) => ({
          ...values,
          image: tempFilename,
        }));
      }

      const blogResponse = await axios.post(
        "http://localhost:5000/api/blog",
        {
          ...values,
          // Check if a file is uploaded and use the filename, otherwise set it to an empty string or handle it as needed
          image: tempFilename ? tempFilename : "",
        },
        config
      );

      toast.success("Added Blog");
      console.log("Submitted", blogResponse.data);

      setTimeout(() => {
        navigation("/");
      }, 3000);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <NewNavi />
      <div className="container-head">
        <Helmet>
          <title>Add Page</title>
        </Helmet>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "2rem",
          }}
        >
          Add Blog
        </h1>
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
              <div className="form-floating ">
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
                <div>
                  <label htmlFor="fileInput" className="custom-file-input">
                    Choose File
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFile}
                    style={{ display: "none" }}
                  />
                </div>

                {/* select tags */}
                <div>
                  <select
                    name=""
                    onChange={(e) => {
                      // console.log(e.target.value);
                      setValues({ ...values, tag: e.target.value });
                    }}
                    id=""
                  >
                    <option disabled selected value="">
                      Choose Your Tag
                    </option>
                    <option value="News">News</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Fun">Fun</option>
                    <option value="Facts">Facts</option>
                  </select>
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
