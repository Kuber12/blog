import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NewNavi from "./NewwNav";
import axios from "axios";
import "./AddBlog.css";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBlog = () => {
  const [file, setFile] = useState(null);
  const [values, setValues] = useState({
    headline: "",
    content: "",
    image: "",
    tag: "",
  });

  const navigation = useNavigate();
  const { id } = useParams();
  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const token = sessionStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };

  const handleUpdate = (event) => {
    event.preventDefault(``);
    const formData = new FormData();
    let updatedFileName = "";
    formData.append("fileInput", file);
    axios
      .post(`http://localhost:5000/api/file/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((imgResponse) => {
        updatedFileName = imgResponse.data.fileName;
        console.log("Image Submitted", imgResponse.data.fileName); //url
        return axios.put(
          `http://localhost:5000/api/blog/${id}`,
          {
            ...values,
            image: updatedFileName,
          },
          config
        );
      })
      .then((res) => {
        toast.success("Updated");
        setTimeout(() => {
          navigation("/");
        }, 2100);
        console.log("updated");
      })
      .catch((err) => {
        toast.error("Something went Wrong Upload Image");
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .then((res) => {
        console.log(res.data.message);
        console.log(res.data.message.headline);
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NewNavi />
      {/* <NewNav /> */}
      <Helmet>
        <title>Update Page</title>
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
      <div className="d-flex flex-col gap-5 w-100 vh-100 justify-content-center align-items-center bg-light">
        <h1 style={{ fontSize: "2rem" }}>Update Blog</h1>
        <div className="w-50  border bg-white shadow px-5  py-5 rounded">
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="name" className="mb-3">
                Blog Title:
              </label>
              <h1>{values.headline}</h1>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                id=""
                value={values.headline}
                onChange={(e) =>
                  setValues({ ...values, headline: e.target.value })
                }
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="mb-3">
                BLog Content
              </label>
              <textarea
                // onChange={handleTextArea}

                className="form-control p-5 mb-4"
                placeholder="Blog Content"
                id="floatingTextarea"
                style={{ width: "100%", height: "124px" }}
                onChange={(e) =>
                  setValues({ ...values, content: e.target.value })
                }
                // rows="5"
              ></textarea>
              <div>
                <select
                  name=""
                  onChange={(e) => {
                    console.log(e.target.value);
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
            </div>

            <button className="btn btn-success">Update</button>
            <Link to="/" className="btn btn-primary ms-3">
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
