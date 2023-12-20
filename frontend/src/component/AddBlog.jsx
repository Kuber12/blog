import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NewNav from "./NewNav";
import NewNavi from "./NewwNav";
import "./AddBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const navigation = useNavigate();  
  const [values, setValues] = useState({
    headline: "",
    content: "",
    // image :"",
    tag:""
  });


  // const handleFile = (e)=>{
  //   console.log(e.target.files);
  //   setValues({...values,image:e.target.files[0]})
  // }
  


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // const formData = new FormData();
    // formData.append("headline", values.headline);
    // formData.append("content", values.content);
    // formData.append("tag", values.tag);
    // formData.append("image", values.image); // assuming values.image is the file
    // console.log([...formData.entries()]);
    try {
      const response = await axios.post("http://localhost:5000/api/blog", values);
      console.log("Submitted", response.data);
      navigation("/");
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
                <input type="file" id="fileInput" onChange={handleFile} style={{ display: "none" }} />
              </div> */}
                
                {/* select tags */}
                <div>
                  <select name="" 
                  onChange={e=>{
                    console.log(e.target.value)
                  setValues({...values,tag: e.target.value})}
                  }
                  id="">
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
