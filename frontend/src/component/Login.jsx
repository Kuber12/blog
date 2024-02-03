import React, { useContext, useState } from "react";
import {useForm} from "react-hook-form";
import "./Login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "./GlobalContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
   const [error, setError] =useState(null);
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: loginRegister, handleSubmit: loginHS, formState: loginFS } = useForm();
    const { register: registerRegister, handleSubmit: registerHS, formState: registerFS } = useForm();
  
    const selectedGender = "Male"; //overwrite later
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:5000/api/user/login", data)
  //     .then((res) => {
  //       // console.log(res.data.message);
  //       const token = res.data.message;
  //       // sessionStorage.setItem("authToken", token);
  //       setTokenData(token);
  //       toast.success("Login Successful");
  //       setTimeout(() => {
  //         navigation("/");
  //       }, 3000);
  //     })
  //     .catch((err) => console.log(err));
  // };
  const handleLogin = (data) => {
    axios
      .post("http://localhost:5000/api/user/login", data)
      .then((res) => {
        // console.log(res.data.message);
        const token = res.data.message;
        // sessionStorage.setItem("authToken", token);
        setTokenData(token);
        toast.success("Login Successful");
        setTimeout(() => {
          navigation("/");
        }, 3000);
      })
      .catch((err) =>{
        if(err.response){
          setError("Incorrect username or password!");
        }else{
          setError("Error during Login, Please try again!");
        }
      });
  };
  const handleRegistration = (data) => {
    axios
      .post("http://localhost:5000/api/user/register", registrationData)
      .then((res) => {
        console.log(res.data.message);
        toast.success("Registration Successful");
        setTimeout(() => {
          navigation("/");
        }, 3000);
      })
      .catch((err) => {
        if(err.response){
          setError("Enter all valid Data");
        }else{
          setError("Error during Registration, Please try again!");
        }
      });
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
          <form onSubmit={loginHS(handleLogin)} noValidate method="post">
            <div className="email">
              <input
              {...loginRegister("username",
              {required:"Enter your username"}
              )}
                type="text"
                name="username"
                id="email"
                placeholder="Username"
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
              <div className="err_m">{loginFS.errors.username && <p>{loginFS.errors.username.message}</p>}</div>
            </div>
            <div className="password">
              <input
               {...loginRegister("password",
              {required:"Enter your Password"}
              )}
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
               <div className="err_m">{loginFS.errors.password && <p>{loginFS.errors.password.message}</p>}</div>
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

          <form
            onSubmit={registerHS(handleRegistration)} noValidate
            className="reg-form form-container"
          >
            <label htmlFor="rUsername">Username:</label>
            <input
            {
              ...registerRegister("rUsername",{
                required:"Enter Username",
                minLength:{
                  value:5, message:"Username must be atleast 6 characters."
                },
                pattern:{
                  value:/^[a-zA-z0-9_]+$/, message:"Invalid Username",
                },
              })
            }
              type="text"
              id="username"
              name="rUsername"
              value={registrationData.username}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  username: e.target.value,
                })
              }
            />
            <div className="err_m">{registerFS.errors.rUsername && (
              <p>{registerFS.errors.rUsername.message}</p>
            )} </div> 
            <label htmlFor="name">Name:</label>
            <input
            {
              ...registerRegister("name",{
                required:"Enter your Full Name",
                pattern:{
                  value:/^[A-Za-z\s]+$/, message:"Name cannot contain number or any special symbols",
                }
              })
            }
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
            <div className="err_m">{registerFS.errors.name && <p>{registerFS.errors.name.message}</p>}</div>
            
            <label htmlFor="password">Password:</label>
            <input
            {...registerRegister("password",{
              required:"Enter a Password",
              pattern: {
              value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,15}$/,
              message: 'Must contain at least one uppercase letter, one symbol, and one digit',
            },
            })}
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
            <div className="err_m">{registerFS.errors.password && <p>{registerFS.errors.password.message}</p>}</div>
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
            <div className="err_m"></div>
            <label htmlFor="email">Email:</label>
            <input
            {...registerRegister("email",{
            required:"Enter your email",
            pattern:{
              value: /^[^\s@]+@[a-z\s@]+\.[a-z]{3}$/,
              message: 'Enter a valid email address',
            }})}
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
            <div className="err_m">{registerFS.errors.email && <p>{registerFS.errors.email.message}</p>}</div>
            
            <label htmlFor="address">Address:</label>
            <input
            {...registerRegister("address",{
            required:"Enter your address",
            pattern:{
              value:/^[A-Za-z]+$/, message:"Address can contain letter only",
            }})}
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
            <div className="err_m">{registerFS.errors.address && <p>{registerFS.errors.address.message}</p>}
           </div>
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
