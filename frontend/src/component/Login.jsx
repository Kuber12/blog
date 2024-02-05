import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Vali_value from "./Vali_value";
import Lvali from "./Login_vali";
import Regi_vali from "./Regi_vali";
import R_vali from "./R_vali";

const Login = () => {
  const { handleChange,handleSubmit, values, errors } = Vali_value(Lvali);
  const { handleRChange,handleRSubmit,registrationData, Rerrors } =Regi_vali(R_vali);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

   const [error, setError] =useState(null);
    
  
    const selectedGender = "Male"; //overwrite later
 
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
          <form onSubmit={handleSubmit} method="post">
            <div className="email">
              <input
                type="text"
                name="username"
                id="email"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
              />
              <div className="err_m">{errors.username && <p>{errors.username}</p>}</div>
            </div>
            <div className="password">
              <input

                type="password"
                name="password"
                id="password"
                placeholder="*********"
                value={values.password}
                onChange={handleChange}
              />
               <div className="err_m">{errors.password && <p>{errors.password}</p>}</div>
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
            <div className="err_m">{error && <p className="err_msg">{error}</p>}</div>
          </form>
          <span className="slide-button" onClick={handleSlideButtonClick}>
            Create a new account
          </span>
        </div>
        <div className="middle"></div>
        <div className="right">
          <div className="form-close">
            <Link to="/">
              <FontAwesomeIcon icon={faXmark} size="2x" />
            </Link>
          </div>
          <h1 className="form-heading hedvig-font">Register Now</h1>

          <form onSubmit={handleRSubmit} 
            className="reg-form form-container">

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={registrationData.username}
              onChange={handleRChange}
            />
            <div className="err_m">
            {Rerrors.username && (<p>{Rerrors.username}</p>)}
            </div> 

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={registrationData.name}
              onChange={handleRChange}
            />
            <div className="err_m">{Rerrors.name && <p>{Rerrors.name}</p>}</div>
            
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registrationData.password}
              onChange={handleRChange}
            />
            <div className="err_m">{Rerrors.password && <p>{Rerrors.password}</p>}</div>
           
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={registrationData.dob}
              onChange={handleRChange}
            />
        
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registrationData.email}
              onChange={handleRChange}
            />
            <div className="err_m">{Rerrors.email && <p>{Rerrors.email}</p>}</div>
            
            <label htmlFor="address">Address:</label>
            <input
              type="address"
              id="address"
              name="address"
              value={registrationData.address}
              onChange={handleRChange}
            />
            {/* <div className="err_m">{Rerrors.address && <p>{Rerrors.address}</p>}
           
           </div> */}
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
            <div className="err_m"></div>
            <button className="submit" type="submit">
              SIGN UP
            </button>
            {/* <div className="err_m">{error && <p className="err_msg">{error}</p>}</div> */}
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
