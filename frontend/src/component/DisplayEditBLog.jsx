import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NewwNav from "./NewwNav";

const DisplayEditBLog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = sessionStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };

  // console.log(config());

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog", config)
      .then((res) => setData(res.data.message))
      .catch((err) => console.log(err));
  }, [data]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:5000/api/blog/${id}`, config)
        .then((res) => {
          console.log("Deleted");
          // window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <NewwNav />
      <div className="d-flex flex-column justify-content-center align-items-center bg-light p-3">
        <div className="w-100 rounded bg-white border shadow p-4">
          <h1 style={{ textAlign: "center", fontSize: "32px" }}>
            List of Blogs
          </h1>
          <div className="d-flex justify-content-end">
            <Link to="/AddBlog" className="btn btn-success">
              Add
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Blog Name</th>
                  <th>Tag</th>
                  <th>Content</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{d.headline.slice(0, 10)}</td>
                    <td>{d.tag}</td>
                    <td>
                      {d.content.length > 10
                        ? d.content.slice(0, 15) + "..."
                        : d.content}
                    </td>
                    <td style={{ display: "flex", flexWrap: "wrap" }}>
                      <Link
                        to={`/cardsDetails/${d._id}`}
                        className="btn btn-sm btn-info me-2"
                      >
                        Read
                      </Link>
                      <Link
                        to={`/EditBlog/${d._id}`}
                        className="btn btn-sm btn-primary me-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={(e) => handleDelete(d._id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayEditBLog;
