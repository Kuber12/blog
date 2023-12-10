import React,{useState} from "react";
import "./nav.css";
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
        </nav>
    </div>
  );
};

export default NavBar;