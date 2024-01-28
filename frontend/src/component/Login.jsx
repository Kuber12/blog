import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContent";
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
  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", data)
      .then((res) => {
        // console.log(res.data.message);
        const token = res.data.message;
        sessionStorage.setItem("authToken", token);
        setTokenData(token);
        navigation("/");
      })
      .catch((err) => console.log(err));
  };
  const handleRegistration = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/user/register", registrationData)
      .then((res) => {
        // console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  const handleSlideButtonClick = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
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
        <h1>Sign In</h1>
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
        <h1>Register Now</h1>
        <form onSubmit={handleRegistration} className="reg-form form-container">
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
              setRegistrationData({ ...registrationData, name: e.target.value })
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
              setRegistrationData({ ...registrationData, dob: e.target.value })
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
          <button className="submit" type="submit">
            SIGN UP
          </button>
        </form>
        <span className="slide-button" onClick={handleSlideButtonClick}>
          Log In To Your Existing Account
        </span>
      </div>
    </div>
  );
};

export default Login;
