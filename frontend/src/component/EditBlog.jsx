import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NewNavi from "./NewwNav";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const navigation = useNavigate();
  const { id } = useParams();

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/api/blog/${id}`, values)
      .then((res) => {
        console.log("updated");
        navigation("/");
      })
      .catch((err) => console.log(err));
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
  const [values, setValues] = useState({
    headline: "",
    content: "",
    tag:""
  });
  return (
    <>
      <NewNavi />
      {/* <NewNav /> */}
      <Helmet>
        <title>Edit Page</title>
      </Helmet>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5  py-3 rounded">
          <h1>Update Blog</h1>
          <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="name">Blog Title:</label>
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
              <label htmlFor="email">BLog Content</label>
              <textarea
                // onChange={handleTextArea}

                className="form-control p-5"
                placeholder="Blog Content"
                id="floatingTextarea"
                style={{ width: "100%", height: "124px" }}
                onChange={(e) =>
                  setValues({ ...values, content: e.target.value })
                }
                // rows="5"
              ></textarea>
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
