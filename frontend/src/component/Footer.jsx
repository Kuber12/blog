import React from "react";
import facebook from "../Icons/facebook.png";
import instagram from "../Icons/instagram.png";
import twitter from "../Icons/twitter.png";
import footer_ty from "../images/footer_ty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faPhone,
  faEnvelope,
  faLocationDot,

} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-footer ">
      {/* contact  */}
      <div className="contact" >
        <a href="#" >
         <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: "25px", paddingRight:"5px"}}/> Contact ID here
        </a>
        <a href="#">
         <FontAwesomeIcon icon={faPhone} style={{ fontSize: "25px", paddingRight:"5px" }}/> Phone Number Here
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "25px", paddingRight:"5px" }}/> Email Address Here
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "25px", paddingRight:"5px" }}/> Location Here
        </a>
      </div>
     
      
      <div className="thanks">
      { }
      <div className="sm">
            <ul>
                  <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                  <li><a href="#"><img src={facebook}  alt="Facebook" /></a></li>
                  <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
            </ul>
        </div>
        {/* thanks  */}
        <h2 style={{ textAlign: "center" }}>
          <img src={footer_ty} className="thanksIcon" alt="" />
        </h2>
      </div>
      {/* newsletter  */}
      <div className="newsLetter">
        <h5>WANT A NEWSLETTER?</h5>
        <input type="text" placeholder="Drop Your Email"/>
        <button id="footer_submit">Submit</button>
      </div>
    </div>
  );
};

export default Footer;
