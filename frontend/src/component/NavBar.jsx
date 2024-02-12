/* The code is defining a functional component called `NavBar` in JavaScript React. */
import React, { useState } from "react";
import "./NavBar.css";
import "./NabBar.js";
import { Link } from "react-router-dom";
const NavBar = ({ sentDataToParent }) => {
  const [isElementVisible, setElementVisible] = useState(false);
  const toggleElementVisibility = () => {
    console.log("Toggling element visibility");
    setElementVisible(!isElementVisible);
  };

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
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <img
              src="
            "
              alt="Logo"
            />
          </li>
        </ul>
        <ul className="hamburger" onClick={toggleElementVisibility}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {isElementVisible && (
          <ul className="hamburger-ul">
            <li className="home">
              {" "}
              <Link to="/" onClick={handleClickVisible}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AddBlog">Add</Link>
            </li>
            <li>
              <Link to="/EditBlog">Edit</Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>
          </ul>
        )}
        <ul className="ul_items">
          <li className="home">
            {" "}
            <Link to="" onClick={handleClickVisible}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AddBlog" onClick={handleClickAdd}>
              Add
            </Link>
          </li>
          <li>
            <Link to="/EditBlog">Edit</Link>
          </li>
          <li>
            <Link to="/User" onClick={handleClickVisible}>
              User
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
