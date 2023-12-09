import React, { useState } from "react";
import "./NavBar.css";
import "./NabBar.js";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isElementVisible, setElementVisible] = useState(false);
  const toggleElementVisibility = () => {
    console.log("Toggling element visibility");
    setElementVisible(!isElementVisible);
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AddBlog">Add</Link>
            </li>
            <li>
              <Link to="/EditBlog">Edit</Link>
            </li>
            <li>
              <Link to="">User</Link>
            </li>
          </ul>
        )}
        <ul className="ul_items">
          <li className="home">
            {" "}
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/AddBlog">Add</Link>
          </li>
          <li>
            <Link to="/EditBlog">Edit</Link>
          </li>
          <li>
            <Link to="">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
