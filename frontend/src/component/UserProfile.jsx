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
  const { user } = data_;

  const { email, fullname, id, imgUrl, name, username, dob, bio } = user;
  const [hitApi, setHitApi] = useState(1);

  const [editStatus, setEditStatus] = useState(true);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
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
  const gender="female";

  const icon =
  gender === 'female' ? faVenus : gender === 'male' ? faMars : faNeuter;
  

  const genderText =
    gender === 'female' ? 'Female' : gender === 'male' ? 'Male' : 'Other';

 
  return (
    <>
      <div id="mainBody">
        <div className="btmBlc">
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
                <button className="blog-user-follow">Edit</button>
              </div>
            </div>
            <div className="bio">
              {Error != "" && <h6>{Error}</h6>}
              <p id="fname"> {name ? name : ""} </p>
              <p id="uname">@{username ? username : ""}</p>
              {/* bio form ma add vako xaina */}
              <p id="bioo">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                nobis ipsum temporibus laboriosam recusandae odio, id eveniet
                commodi aspernatur, velit tempora distinctio soluta rem, dolorum
                aliquam ratione illum totam ea?
              </p>
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
                <span className="udP">Kentucky, U.S.A</span>
              </div>
              
              {/* email */}
              <div className="User_Dtl">
                <FontAwesomeIcon icon={faEnvelope} className="ics" />
                <span className="udP">{email}</span>
              </div>
            </div>
          </div>
          <form className="userprofile-top-container">
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
                <button type="submit" className="blog-user-follow">Save</button>
              </div>
            </div>
            <div className="bio">
              {Error != "" && <h6>{Error}</h6>}
              <input name="name" type="text" id="fname" value={name}/>
              <p id="uname">@{username ? username : ""}</p>
              {/* bio form ma add vako xaina */}
              <textarea name="bio" rows={5} cols={50} id="bioo" value={bio}/>
            </div>
            <div className="aboutMe">
              <img src={abm} id="im" />
              {/* birthday */}
              <div className="User_Dtl">
                <FontAwesomeIcon icon={faCakeCandles} className="ics" />
                <input name="dob" type="date" className="udP" value={dob}/>
              </div>

              {/* gender */}
              <div className="User_Dtl">
                {icon && <FontAwesomeIcon icon={icon} className="ics" />}
                <select
                  id="gender"
                  className ="udP"
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
                <input className="udP" value={"address"}/>
              </div>
              
              {/* email */}
              <div className="User_Dtl">
                <FontAwesomeIcon icon={faEnvelope} className="ics" />
                <input className="udP" value={email}/>
              </div>
            </div>
          </form>
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
