import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_edit= (edit_userVali) => {

  const [editData, seteditData] = useState({
    username: "",
    name: "",
    dob: "",
    email: "",
    address:"",
  });

  const [Eerrors, setEerrors] = useState({});

  const handleEChange = (e) => {
    const { name, value } = e.target;
    seteditData({
      ...editData,
      [name]: value,
    });
  };
  const handleESubmit = (e) => {
    e.preventDefault();
    const errors = edit_userVali(editData);
    setEerrors(errors);
    };

  return { handleEChange, handleESubmit, editData, Eerrors };
};
export default User_edit;
