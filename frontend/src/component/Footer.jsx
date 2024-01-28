import React, { useState } from "react";
import facebook from "../Icons/facebook.png";
import instagram from "../Icons/instagram.png";
import twitter from "../Icons/twitter.png";
import footer_ty from "../images/footer_ty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faAddressBook,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import axios from "axios";
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleDropEmail = (e) => {
    e.preventDefault();
    if (email !== "") {
      axios
        .post(`http://localhost:5000/api/newsletter/${email}`)
        .then((res) => {
          toast.success("Send to your email");
        })
        .catch((er) => {
          toast.error("Error while sending Email");
        });
      console.log("hi");
    } else {
      toast.error("kUUCH TO RAKH BADWE");
    }
  };
  return (
    <div className="container-footer ">
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
      {/* contact  */}
      <div className="contact">
        <a href="#">
          <FontAwesomeIcon className="icc" icon={faAddressBook} /> Contact ID
          here
        </a>
        <a href="#">
          <FontAwesomeIcon className="icc" icon={faPhone} /> Phone Number Here
        </a>
        <a href="#">
          <FontAwesomeIcon className="icc" icon={faEnvelope} /> Email Address
          Here
        </a>
        <a href="#">
          <FontAwesomeIcon className="icc" icon={faLocationDot} /> Location Here
        </a>
      </div>

      <div className="thanks">
        <div className="sm">
          <ul>
            <li>
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
        {/* thanks  */}
        <h2>
          <img src={footer_ty} className="thanksIcon" alt="" />
        </h2>
      </div>
      {/* newsletter  */}
      <div className="newsLetter">
        <h5>WANT A NEWSLETTER?</h5>
        <input
          type="text"
          placeholder="Drop Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button id="footer_submit" onClick={handleDropEmail}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Footer;
