/* The above code is a React component called "EditBlog". It is used to edit a blog post. */
import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NewNavi from "./NewwNav";
import axios from "axios";
import "./AddBlog.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactConfetti from "react-confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "./GlobalContent";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const EditBlog = () => {
  const { id } = useParams();
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
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };
  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const [windowDimen, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimen]);

  //fetching tags
  useEffect(() => {
    axios
      .get("https://blog-backend-3dcg.onrender.com/api/tag")
      .then((res) => {
        setTags(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);
  //blog fetch
  useEffect(() => {
    const fetchPrevious = async () => {
      try {
        const res = await fetch(
          `https://blog-backend-3dcg.onrender.com/api/blog/${id}`,
          {
            method: "GET",
          }
        );
        const datas = await res.json();

        const { headline, image, tag, content } = datas.message;
        setValues((prev) => ({
          ...prev,
          headline: headline,
          tag: tag,
          content: content,
          image: image,
        }));
      } catch (ex) {
        console.log("error while fetching" + ex);
      }
    };
    fetchPrevious();
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
  const stopPost = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    stopPost.current.disabled = true;

    try {
      // Check if a file is selected
      let tempFilename;
      if (file) {
        toast.success("Please wait");
        const imageRef = ref(storage, `images/${file.name + v4()}`);
        uploadBytes(imageRef, file)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              tempFilename = url;
              setValues((values) => ({
                ...values,
                image: url,
              }));
              return axios.put(
                `https://blog-backend-3dcg.onrender.com/api/blog/${id}`,
                {
                  ...values,
                  // Check if a file is uploaded and use the filename, otherwise set it to an empty string or handle it as needed
                  image: url ? url : values.image,
                },
                config
              );
            });
          })
          .then((res) => {
            setBtn(true);
            setTimeout(() => {
              setBtn(false);
            }, 3000);
            setTimeout(() => {
              navigation("/Blogs");
            }, 4000);
            toast.success("Blog Edited");
            // console.log("Submitted");
          });
      } else {
        const blogResponse = await axios.put(
          `https://blog-backend-3dcg.onrender.com/api/blog/${id}`,
          {
            ...values,
            // Check if a file is uploaded and use the filename, otherwise set it to an empty string or handle it as needed
            image: tempFilename ? tempFilename : values.image,
          },
          config
        );

        toast.success("Added Blog");
        // console.log("Submitted", blogResponse.data);
        setBtn(true);
        setTimeout(() => {
          setBtn(false);
        }, 3000);
        setTimeout(() => {
          navigation("/Blogs");
        }, 3000);
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("Something went wrong please re-try.");
    }
  };

  return (
    <>
      {btn && (
        <ReactConfetti
          width={windowDimen.width}
          height={windowDimen.height}
          tweenDuration={1000}
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
                value={`${values.headline}`}
                onChange={(e) =>
                  setValues({ ...values, headline: e.target.value })
                }
              />
              <p>
                <textarea
                  // onChange={handleTextArea}

                  className="content-input"
                  value={`${values.content}`}
                  id="floatingTextarea"
                  style={{ width: "100%", height: "124px" }}
                  onChange={(e) =>
                    setValues({ ...values, content: e.target.value })
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
                    <button
                      className="postBlog form-button"
                      type="submit"
                      ref={stopPost}
                    >
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
export default EditBlog;
