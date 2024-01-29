import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "./GlobalContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark
} from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const { setTokenData } = useContext(GlobalContext);
  const navigation = useNavigate();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [registrationData, setRegistrationData] = useState({
    username: "",
    name: "",
    password: "",
    dob: "",
    email: "",
  });
  const selectedGender = "Male"; //overwrite later
  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", data)
      .then((res) => {
        // console.log(res.data.message);
        const token = res.data.message;
        sessionStorage.setItem("authToken", token);
        setTokenData(token);
        toast.success("Login Successful");
        setTimeout(() => {
          navigation("/");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };
  const handleRegistration = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/user/register", registrationData)
      .then((res) => {
        console.log(res.data.message);
        toast.success("Registration Successful");
        setTimeout(() => {
          navigation("/");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  const handleSlideButtonClick = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className={`login-container center ${
          isOverlayVisible ? "overlay-visible" : ""
        }`}
        id="login-container"
      >
        <div
          className={`overlay ${isOverlayVisible ? "slide-left" : ""}`}
          id="overlay"
        ></div>
        <div className="left">
          <h1 className="form-heading hedvig-font">Sign In</h1>
          <form onSubmit={handleLogin} method="post">
            <div className="email">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Username"
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <div className="signindiv">
              <input
                type="submit"
                className="submit"
                name="submit"
                id="submit"
                value="SIGN IN"
              />
            </div>
          </form>
          <span className="slide-button" onClick={handleSlideButtonClick}>
            Create a new account
          </span>
        </div>
        <div className="middle"></div>
        <div className="right">
          <div className="form-close">
            <Link to="/">
              <FontAwesomeIcon
              icon={faXmark}
              size="2x"
              />
            </Link>
          </div>
          <h1 className="form-heading hedvig-font">Register Now</h1>
          <form
            onSubmit={handleRegistration}
            className="reg-form form-container"
          >
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={registrationData.username}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  username: e.target.value,
                })
              }
            />

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={registrationData.name}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  name: e.target.value,
                })
              }
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registrationData.password}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  password: e.target.value,
                })
              }
            />

            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={registrationData.dob}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  dob: e.target.value,
                })
              }
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registrationData.email}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  email: e.target.value,
                })
              }
            />
            <label htmlFor="address">Address:</label>
            <input
              type="address"
              id="address"
              name="address"
              value={registrationData.address}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  address: e.target.value,
                })
              }
            />
            <label>Gender:</label>
            <div className="form-gender">
              <label className="gender-option">
                <input
                  type="radio"
                  value="male"
                  checked={selectedGender === "male"}
                  // onChange={handleGenderChange}
                />
                Male
              </label>

              <label className="gender-option">
                <input
                  type="radio"
                  value="female"
                  checked={selectedGender === "female"}
                  // onChange={handleGenderChange}
                />
                Female
              </label>

              <label className="gender-option">
                <input
                  type="radio"
                  value="other"
                  checked={selectedGender === "other"}
                  // onChange={handleGenderChange}
                />
                Other
              </label>
            </div>
            <button className="submit" type="submit">
              SIGN UP
            </button>
          </form>
          <span className="slide-button" onClick={handleSlideButtonClick}>
            Log In To Your Existing Account
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
