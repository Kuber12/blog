/* The above code is a React component called "AddBlog". It is used to add a new blog post. */
import React, { useContext, useState,useEffect } from "react";
import { Helmet } from "react-helmet";
import NewNavi from "./NewwNav";
import "./AddBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from "./GlobalContent";
const AddBlog = () => {
  const userData = useContext(GlobalContext);
  const { user } = userData;
  const { username } = user;



  const navigation = useNavigate();
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const[tags,setTags] = useState();
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

  //for tags all fetched  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tag")
      .then((res) => 
      {

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
                    {
                      tags && tags.map((items)=>(
                        <>
                          <option value={items.tagname}>{items.tagname}</option>    
                        </>
                      ))
                    }
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
                <div style={{display: "flex",justifyContent:"center"}}>
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
                <div style={{display: "flex",justifyContent:"right"}}>
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
