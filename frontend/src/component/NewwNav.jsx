import React from "react";
import { Link } from "react-router-dom";
import "./navi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

const NewNavi = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Blog
      </Link>
      <input type="checkbox" id="menuBt" />
      <label htmlFor="menuBt" className="icon">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <ul>
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/AddBlog">Create</Link>
        </li>
        <li>
          <Link to="/DisplayEditBLog">Edit</Link>
        </li>
        <li id="userImage">
          <Link to="/User">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="currentUserDetail">
            <div id="userImage" className="userDetailConatainer">
              <img src="" alt="dp" />
              <h3>John Doe</h3>
              <h2>View Profile</h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default NewNavi;
