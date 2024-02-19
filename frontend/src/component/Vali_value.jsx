/**
 * The above code is a custom hook in React that handles form validation and submission for a login
 * form.
 * @returns The function `Vali_value` is returning an object with the properties `handleChange`,
 * `values`, `handleSubmit`, and `errors`.
 */
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "./GlobalContent";

const Vali_value = (vali) => {
  const { setTokenData } = useContext(GlobalContext);
  const navigation = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Please wait...");
    setErrors(vali(values));
    if (Object.keys(errors).length === 0) {
      const loginData = {
        username: values.username,
        password: values.password,
      };

      axios
        .post(
          "https://blog-backend-3dcg.onrender.com/api/user/login",
          loginData
        )
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
        .catch((err) => {
          if (err.response) {
            toast.error("Incorrect username or password!");
          } else {
            toast.error("Error during Login, Please try again!");
          }
        });
    }
  };
  return { handleChange, values, handleSubmit, errors };
};

export default Vali_value;
