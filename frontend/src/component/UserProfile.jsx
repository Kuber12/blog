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

  const { email, fullname, id, imgUrl, name, username, dob } = user;
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
              <div className="follow_me">
                {/* <button className="blog-user-follow">Follow Me +</button> */}
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
              <div className="User_Dtl">
                <FontAwesomeIcon icon={faCakeCandles} className="ics" />
                <p className="udP">{dob}</p>
              </div>
              <div className="User_Dtl">
                <FontAwesomeIcon icon={faVenus} className="ics" />
                <p className="udP">Female</p>
              </div>
              <div className="User_Dtl">
                <FontAwesomeIcon icon={faHome} className="ics" />
                <p className="udP">Kentucky, U.S.A</p>
              </div>
              <div className="User_Dtl">
                <FontAwesomeIcon icon={faEnvelope} className="ics" />
                <p className="udP">{email}</p>
              </div>
            </div>
          </div>
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
