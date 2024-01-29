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
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const data_ = useContext(GlobalContext);
  const imagePath = "../../uploads/";
  const { user } = data_;
  const { email, fullname, id, imgUrl, name, username } = user;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/haha/user`)
      .then((res) => {
        // console.log(res.data.message);
        setData(res.data.message);
        // console.log(Data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <div id="mainBody">
        <div className="btwnBlc">
          <div className="Profile">
            <img src={imgUrl} alt="userprofile" />
          </div>
          <div className="follow_me">
            <button className="Fbtn">Follow Me +</button>
          </div>
          <div className="aboutMe">
            <img src={abm} id="im" />
            <div className="User_Dtl">
              <FontAwesomeIcon icon={faCakeCandles} className="ics" />
              <p className="udP">2000.04.10</p>
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
        <div className="btmBlc">
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
          <div className="myPost">
            <p className="Ht">My Post</p>
            <div className="Blog_disp">
              <NewCard data={Data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
