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
            <div className="userDetailConatainer">
              <img id="user-dp" src="https://i.pinimg.com/1200x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg" alt="dp" />
              <h2>John Doe</h2>
              <h3>View Profile</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default NewNavi;
