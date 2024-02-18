/* The code is defining a functional component called `UserProfile` in JavaScript using React. */
import { useState, React, useEffect, useContext, useDebugValue } from "react";
import "./userProfile.css";
import abm from "../images/abm.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faVenus,
  faMars,
  faNeuter,
  faHome,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "./GlobalContent";
import NewCard from "./NewCard";
const UserProfile = () => {
  const data_ = useContext(GlobalContext);
  const imagePath = "../../uploads/";
  const { user } = data_ || {};
  console.log(user);

  const { email, id, imgUrl, name, username, dob, bio, address, gender } = user;
  const [hitApi, setHitApi] = useState(1);

  const [editStatus, setEditStatus] = useState(true);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  //fetching the blogs of the current user
  useEffect(() => {
    axios
      .get(`https://blog-backend-3dcg.onrender.com/api/blog/${username}/user`)
      .then((res) => {
        setData(res.data.message.reverse());
      })
      .catch((err) => setError(err.message));
  }, [hitApi]);

  //handle instead of no image
  const handleImageError = (event) => {
    event.target.src = "../../uploads/default.png";
  };

  //Change this data with the backend gender data

  const icon =
    gender === "female" ? faVenus : gender === "male" ? faMars : faNeuter;

  const genderText =
    gender === "female" ? "Female" : gender === "male" ? "Male" : "Other";

  const [imageSrc, setImageSrc] = useState("../../uploads/Profile.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };
  const handleSave = () => {
    setIsEditing(false);
    // Your save logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Your cancel logic here
  };

  const handleEdit = () => {
    setIsEditing(true);
    // Your edit logic here
  };
  return (
    <>
      <div id="mainBody">
        <div className="btmBlc">
          {!isEditing && (
            <div className="userprofile-top-container">
              <div className="profile-follow">
                <div className="Profile">
                  <img
                    src={"../../uploads/Profile.png"}
                    onError={handleImageError}
                    alt="userprofile"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="userprofile-button">
                  {/* <button className="blog-user-follow">Follow Me +</button> */}
                  <button className="blog-user-follow" onClick={handleEdit}>
                    Edit
                  </button>
                </div>
              </div>
              <div className="bio">
                {Error != "" && <h6>{Error}</h6>}
                <p id="fname"> {name ? name : ""} </p>
                <p id="uname">@{username ? username : ""}</p>
                {/* bio form ma add vako xaina */}
                <p id="bioo">{bio ? bio : ""}</p>
              </div>
              <div className="aboutMe">
                <img src={abm} id="im" />
                {/* birthday */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faCakeCandles} className="ics" />
                  <span className="udP">{dob}</span>
                </div>

                {/* gender */}
                <div className="User_Dtl">
                  {icon && <FontAwesomeIcon icon={icon} className="ics" />}
                  <span className="udP">{genderText}</span>
                </div>

                {/* address */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faHome} className="ics" />
                  <span className="udP">{address}</span>
                </div>

                {/* email */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faEnvelope} className="ics" />
                  <span className="udP">{email}</span>
                </div>
              </div>
            </div>
          )}
          {isEditing && (
            <form className="userprofile-top-container">
              <div className="profile-follow">
                <div className="Profile">
                  <img
                    className="edit-profile-picture"
                    src={imageSrc}
                    onClick={handleImageClick}
                    alt="userprofile"
                    width="100%"
                    height="100%"
                  />

                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
                <div className="userprofile-button">
                  {/* <button className="blog-user-follow">Follow Me +</button> */}
                  <button
                    className="blog-user-follow"
                    id="save"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="blog-user-follow"
                    id="cancel"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="bio">
                {Error != "" && <h6>{Error}</h6>}
                <input name="name" type="text" id="fname" value={name} />
                <p id="uname">@{username ? username : ""}</p>
                {/* bio form ma add vako xaina */}
                <textarea name="bio" rows={5} cols={50} id="bioo" value={bio} />
              </div>
              <div className="aboutMe">
                <img src={abm} id="im" />
                {/* birthday */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faCakeCandles} className="ics" />
                  <input name="dob" type="date" className="udP" value={dob} />
                </div>

                {/* gender */}
                <div className="User_Dtl">
                  {icon && <FontAwesomeIcon icon={icon} className="ics" />}
                  <select
                    id="gender"
                    className="udP"
                    // value={editedGender}
                    // onChange={(e) => setEditedGender(e.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* address */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faHome} className="ics" />
                  <input className="udP" value={address} />
                </div>

                {/* email */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faEnvelope} className="ics" />
                  <input className="udP" value={email} />
                </div>
              </div>
            </form>
          )}
          <div className="myPost">
            <p className="Ht hedvig">My Post</p>
            <div className="Blog_disp">
              <NewCard
                data={Data}
                editStatus={editStatus}
                // handleApiHit={handleApiHit}
                setHitApi={setHitApi}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
