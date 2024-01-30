import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "./GlobalContent";
import Picz from "../images/Picture1.png";
const NewNavi = () => {
  const data = useContext(GlobalContext);

  const { user } = data;
  const { setUser } = data;
  // console.log(user);
  // console.log(data.user.username);
  const handleLogOut = () => {
    const sessionDestroy = sessionStorage.removeItem("authToken");
    setUser("");
  };
  return (
    <div className="navbar hedvig-font">
     <Link to="/" className="logo">
      <div className="logo-container">
        <img src={Picz} className="logoo" alt="Logo" />
        <span className="logo-text">Blog Tale</span>
      </div>
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
        <li>{data.user.username ? <Link to="/AddBlog">Create</Link> : ""}</li>
        <li>
          {data.user.username ? <Link to="/DisplayEditBLog">Edit</Link> : ""}
        </li>
        {data.user.username ? (
          <li id="userImage">
            <Link to="/User">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <div className="currentUserDetail">
              <div className="userDetailConatainer">
                <img
                  id="user-dp"
                  src="https://i.pinimg.com/1200x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"
                  alt="dp"
                />
                <h3>View Profile</h3>
                <h2>Name: {data.user.username}</h2>
                <h2>Email: {data.user.email}</h2>
                <Link to="/" onClick={handleLogOut}>
                  <span style={{ fontSize: "12px" }}>LogOut</span>
                </Link>
              </div>
            </div>
          </li>
        ) : (
          <li id="userImage">
            <Link to="/Login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
export default NewNavi;
