import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NewNavi from "./NewwNav";
import axios from "axios";
import "./AddBlog.css";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "./GlobalContent";
const EditBlog = () => {
  const { id } = useParams();
  const userData = useContext(GlobalContext);
  const { user } = userData;
  const { username } = user;
  // console.log(username);
  const navigation = useNavigate();
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [values, setValues] = useState({
    headline: "",
    content: "",
    image: "",
    tag: "",
    username: username,
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
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile(selectedFile);
        setFilePreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setFilePreview(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Check if a file is selected
      let tempFilename;
      if (file) {
        const formData = new FormData();
        formData.append("fileInput", file);
        formData.append("username", username);

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

      const blogResponse = await axios.put(
        `http://localhost:5000/api/blog/${id}`,
        {
          ...values,
          // Check if a file is uploaded and use the filename, otherwise set it to an empty string or handle it as needed
          image: tempFilename ? tempFilename : "",
        },
        config
      );

      toast.success("Added Blog");
      console.log("Submitted", blogResponse.data);

      // setTimeout(() => {
      //   navigation("/");
      // }, 3000);
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
          Edit Blog
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="blog-content">
            {filePreview && (
              <img
                className="blog-content-image"
                src={filePreview}
                alt="blog content"
              />
            )}
            <div className="blog-content-text">
              <input
                type="text"
                className="title-input"
                placeholder="Enter Title"
                onChange={(e) =>
                  setValues({ ...values, headline: e.target.value })
                }
              />
              <p>
                <textarea
                  // onChange={handleTextArea}

                  className="content-input"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ width: "100%", height: "124px" }}
                  onChange={(e) =>
                    setValues({ ...values, content: e.target.value })
                  }
                  // rows="5"
                ></textarea>
              </p>
            </div>
            <div className="buttons-container">
              {/* top */}
              <div className="button-top-container">
                {/* file  input */}
                {/* select tags */}
                <div>
                  <select
                    name=""
                    className="form-button"
                    onChange={(e) => {
                      // console.log(e.target.value);
                      setValues({ ...values, tag: e.target.value });
                    }}
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
                <div>
                  <label
                    htmlFor="fileInput"
                    className="custom-file-input form-button"
                  >
                    Choose Image
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFile}
                    style={{ display: "none" }}
                  />
                </div>

                <button className="postBlog form-button" type="submit">
                  Post
                </button>
              </div>
              {/* bottom */}
              <div style={{ marginTop: "20px", alignSelf: "flex-start" }}></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default EditBlog;
