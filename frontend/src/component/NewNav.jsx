import React, { useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NewNav = ({ sentDataToParent }) => {
  //logic to send data from child to parent
  const [hideClick, sethideClick] = useState(false);
  const [visibleClick, setvisibleClick] = useState(true);
  const handleClickAdd = () => {
    // Call the function passed from the parent and pass data to it
    sentDataToParent(hideClick);
  };
  const handleClickVisible = () => {
    // Call the function passed from the parent and pass data to it
    sentDataToParent(visibleClick);
  };
  const sendmeg = () => {
    sentDataToParent("Hello");
  };

  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "#BDE3FF", borderColor: "black solid" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="list">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={handleClickVisible}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/AddBlog"
                  onClick={handleClickAdd}
                >
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/EditBlog"
                  onClick={handleClickAdd}
                >
                  Edit
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/User"
                  onClick={handleClickVisible}
                >
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NewNav;
