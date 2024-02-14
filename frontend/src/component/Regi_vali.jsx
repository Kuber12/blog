/**
 * The `Regi_vali` function is a custom hook that handles form validation and submission for user
 * registration in a React application.
 * @returns The code is returning an object with the following properties and values:
 */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Regi_vali = (R_vali) => {
  const navigation = useNavigate();

  const [registrationData, setRegistrationData] = useState({
    username: "",
    name: "",
    password: "",
    dob: "",
    email: "",
  });

  const [Rerrors, setRerrors] = useState({});

  const handleRChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };
  const handleRSubmit = (e) => {
    e.preventDefault();
    const errors = R_vali(registrationData);
    setRerrors(errors);
    if (Object.keys(errors).length === 0) {
      axios
        .post(
          "https://blog-backend-3dcg.onrender.com/api/user/register",
          registrationData
        )
        .then((res) => {
          console.log(res.data.message);
          toast.success("Registration Successful");
          setTimeout(() => {
            navigation("/");
          }, 3000);
        })
        .catch((err) => {
          if (err.response) {
            toast.error("Enter all valid Data");
          } else {
            toast.error("Error during Registration, Please try again!");
          }
        });
    }
  };

  return { handleRChange, handleRSubmit, registrationData, Rerrors };
};
export default Regi_vali;
