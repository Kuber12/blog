import React from "react";
import facebook from "../Icons/facebook.png";
import instagram from "../Icons/instagram.png";
import twitter from "../Icons/twitter.png";
import contactbook from "../Icons/contact-book.png";
import contactmail from "../Icons/contact-mail.png";
import email from "../Icons/email.png";
import location from "../Icons/location.png";
const Footer = () => {
  const borderColor = {
    border: "3px solid #E6D579",
    padding: "10px",
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        height: "auto",
        display: "flex",
        padding: "30px",
        justifyContent: "space-between",
        border: "1px solid black",
        marginTop: "3rem",
      }}
    >
      {/* contact  */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <a href="#">
          <img src={contactbook} alt="Bookmark" style={{ width: "30px" }} />
        </a>
        <a href="#">
          <img src={contactmail} alt="Phone" style={{ width: "30px" }} />
        </a>
        <a href="#">
          <img src={email} alt="Email" style={{ width: "30px" }} />
        </a>
        <a href="#">
          <img src={location} alt="Location" style={{ width: "30px" }} />
        </a>
      </div>
      {/* thanks  */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: " 20px",
          transform: "translate(100px)",
        }}
      >
        {/* icons */}
        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <a href="#">
            <img src={instagram} style={{ width: "40px" }} alt="Instagram" />
          </a>
          <a href="#">
            <img src={facebook} style={{ width: "40px" }} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} style={{ width: "40px" }} alt="Twitter" />
          </a>
        </div>
        <h2 style={{ textAlign: "center" }}> THANKS</h2>
      </div>
      {/* newsletter  */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h5 style={borderColor}>Want A NEWSLETTER?</h5>
        <h5 style={{ ...borderColor, padding: "20px" }}>Drop Your Email</h5>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Footer;
