import React, { useState } from "react";
import "./NavBar.css";
import "./NabBar.js";
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
            <li className="home"> Home</li>
            <li>Add</li>
            <li>Edit</li>
            <li>User</li>
          </ul>
        )}
        <ul className="ul_items">
          <li className="home"> Home</li>
          <li>Add</li>
          <li>Edit</li>
          <li>User</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
