/* The above code is a React component called "AddBlog". It is used to add a new blog post. */
import React, { useContext, useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import NewNavi from "./NewwNav";
import "./AddBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from "./GlobalContent";
import ReactConfetti from "react-confetti";
const AddBlog = () => {
  const userData = useContext(GlobalContext);
  const { user } = userData;
  const { username } = user;

  const navigation = useNavigate();
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [tags, setTags] = useState();
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
  const headlineRef = useRef();
  const contentRef = useRef();

  //for tags all fetched
  useEffect(() => {
    axios
      .get("https://blog-backend-3dcg.onrender.com/api/tag")
      .then((res) => {
        setTags(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const [btn, setBtn] = useState(false);
  const [windowDimen, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimen]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Check if a file is selected
      if (values.headline.length > 250) {
        toast.error(
          "Please make your headline shorter less than 250 characters"
        );
      } else if (values.content.length > 25000) {
        toast.error(
          "Please make your content shorter less than 25000 characters"
        );
        console.log(values.content.length);
      } else {
        let tempFilename;
        if (file) {
          const formData = new FormData();
          formData.append("fileInput", file);
          formData.append("username", username);

          const imgResponse = await axios.post(
            "https://blog-backend-3dcg.onrender.com/api/file/upload",
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
          "https://blog-backend-3dcg.onrender.com/api/blog",
          {
            ...values,
            // Check if a file is uploaded and use the filename, otherwise set it to an empty string or handle it as needed
            image: tempFilename ? tempFilename : "",
          },
          config
        );
        setBtn(true);
        setTimeout(() => {
          setBtn(false);
        }, 3000);
        toast.success("Added Blog");
        console.log("Submitted", blogResponse.data);

        setTimeout(() => {
          navigation("/");
        }, 3000);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
      {btn && (
        <ReactConfetti
          width={windowDimen.width}
          height={windowDimen.height}
          tweenDuration={3000}
        />
      )}
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
                ref={headlineRef}
                onChange={(e) => {
                  setValues({ ...values, headline: e.target.value });
                  e.target.value.length > 250
                    ? (headlineRef.current.style.backgroundColor = "red") &&
                      toast.error("Keep your headline short")
                    : (headlineRef.current.style.backgroundColor = "green");
                }}
                onFocus={(e) => {
                  console.log(values.headline);
                  e.target.value.length > 250
                    ? (headlineRef.current.style.backgroundColor = "red") &&
                      toast.error("Keep your headline short")
                    : (headlineRef.current.style.backgroundColor = "green");
                }}
                onBlur={(e) =>
                  (headlineRef.current.style.backgroundColor = "#e6d579")
                }
              />
              <p>
                <textarea
                  // onChange={handleTextArea}

                  className="content-input"
                  ref={contentRef}
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ width: "100%", height: "124px" }}
                  onChange={(e) => {
                    setValues({ ...values, content: e.target.value });
                    e.target.value.length > 25000
                      ? (contentRef.current.style.backgroundColor = "red") &&
                        toast.error("Keep your content short")
                      : (contentRef.current.style.backgroundColor = "green");
                  }}
                  onBlur={(e) =>
                    (contentRef.current.style.backgroundColor = "#e6d579")
                  }
                  // rows="5"
                ></textarea>
              </p>
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
                      {tags &&
                        tags.map((items) => (
                          <>
                            <option value={items.tagname}>
                              {items.tagname}
                            </option>
                          </>
                        ))}
                      {/* <option value="News">Programming</option>
                    <option value="Entertainment">Web Development</option>
                    <option value="Fun">Design</option>
                    <option value="Facts">Cooking</option>
                    <option value="Facts">Photography</option>
                    <option value="Facts">Fitness</option>
                    <option value="Facts">Personal</option>
                    <option value="Facts"></option>
                    <option value="Facts">Personal</option>
                    <option value="Facts">Personal</option> */}
                    </select>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                  <div style={{ display: "flex", justifyContent: "right" }}>
                    <button className="postBlog form-button" type="submit">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
