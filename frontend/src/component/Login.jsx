import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

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
        <form action="" method="post">
          <div className="email">
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
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
        <form className="reg-form form-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

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
