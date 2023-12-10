<<<<<<< HEAD
import React,{useState} from "react";
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
  return (
    <div class="main">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{backgroundColor:'#BDE3FF', borderColor:'black solid'}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="list">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Edit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faUser}/>
                </a>
              </li>
            </ul>
            
          </div>
        </div>
=======
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
>>>>>>> ca7d218761d91d52c2b59f71ce71dd3675733ca6
      </nav>
    </div>
  );
};

export default NavBar;
