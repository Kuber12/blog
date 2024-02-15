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
import { useParams } from "react-router-dom";
import fetchUserData from "../Utils/userApi";

const UserFromBlog = () => {
  const { FromBlogUser } = fetchUserData();
  const { UserName } = useParams();
  // console.log(UserName);
  const imagePath = "../../uploads/";
  const [user, setUser] = useState({
    address: "",
    dob: "",
    email: "",
    name: "",
    username: "",
    imgUrl: "",
  });
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  //fetching the blogs of the current user
  // console.log(user);
  const fetchUser = async () => {
    const data = await FromBlogUser(`/api/user/${UserName}/user`);
    setUser(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    axios
      .get(`https://blog-backend-3dcg.onrender.com/api/blog/${UserName}/user`)
      .then((res) => {
        setData(res.data.message);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <div id="mainBody">
        <div className="btmBlc">
          <div className="userprofile-top-container">
            <div className="profile-follow">
              <div className="Profile">
                <img src={user?.imgUrl} alt="userprofile" />
              </div>
              <div className="follow_me">
                <button className="blog-user-follow">Follow Me +</button>
              </div>
            </div>
            <div className="bio">
              {Error != "" && <h6>{Error}</h6>}
              <p id="fname">{user.name ? user?.name : ""} </p>
              <p id="uname">@{user.username ? user?.username : ""} </p>
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
                <p className="udP">{user?.dob?.slice(0, 10)}</p>
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
                <p className="udP">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="myPost">
            <p className="Ht hedvig">My Post</p>
            <div className="Blog_disp">
              <NewCard data={Data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserFromBlog;
