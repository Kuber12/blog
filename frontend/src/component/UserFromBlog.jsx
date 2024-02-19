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
import { Link, useParams } from "react-router-dom";
import fetchUserData from "../Utils/userApi";
import { ToastContainer, toast } from "react-toastify";
const UserFromBlog = () => {
  const userData = useContext(GlobalContext);
  const globalUsername = userData?.user?.username;

  const { id } = useParams();
  const { FromBlogUser } = fetchUserData();
  const { UserName } = useParams();
  const [followed, setFollowed] = useState();
  // console.log(UserName);
  const imagePath = "../../uploads/";
  const [user, setUser] = useState({
    address: "",
    dob: "",
    email: "",
    name: "",
    username: "",
    userImage: "",
  });

  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [hitApi, setHitApi] = useState(true);

  const fetchUser = async () => {
    const data = await FromBlogUser(`/api/user/${UserName}/user`);
    setUser(data);
  };

  //handle instead of no image
  const handleImageError = (event) => {
    event.target.src = "../../uploads/default.png";
  };

  //fetching user data
  useEffect(() => {
    fetchUser();
  }, [hitApi]);
  //fetching user blog
  useEffect(() => {
    axios
      .get(`https://blog-backend-3dcg.onrender.com/api/blog/${UserName}/user`)
      .then((res) => {
        setData(res.data.message.reverse());
      })
      .catch((err) => setError(err.message));
  }, [hitApi]);
  //following or not
  useEffect(() => {
    axios
      .get(
        `https://blog-backend-3dcg.onrender.com/api/user/${UserName}/follow/${globalUsername}`
      )
      .then((res) => {
        // console.log(globalUsername);
        // console.log(res.data?.message);
        setFollowed(res.data?.message);
      })
      .catch((ex) => {
        console.log("error on followed or not " + ex);
      });
  }, [hitApi]);

  //follow handle
  const handleFollows = () => {
    axios
      .post(
        `https://blog-backend-3dcg.onrender.com/api/user/${UserName}/follow/${globalUsername}`
      )
      .then((response) => {
        let result = response.data?.message;
        // console.log(result);
        toast.success(result);
        setHitApi((hitApi) => !hitApi);
      })
      .catch((err) => {
        toast.error(`Something went wrong`);
      });
  };

  return (
    <>
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
      <div id="mainBody">
        <div className="btmBlc">
          <div className="userprofile-top-container">
            <div className="profile-follow">
              <div className="Profile">
                <img
                  src={
                    user?.userImage
                      ? user.userImage
                      : "../../uploads/Profile.png"
                  }
                  alt="userprofile"
                  onError={handleImageError}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="follow_me">
                {globalUsername === user.name ? (
                  ""
                ) : globalUsername !== user.name ? (
                  <button
                    className="blog-user-follow"
                    onClick={(e) => handleFollows(e)}
                  >
                    {followed}
                  </button>
                ) : (
                  <Link to="/Login">
                    {" "}
                    <button className="blog-user-follow">Follow me +</button>
                  </Link>
                )}
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
              <NewCard data={Data} setHitApi={setHitApi} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserFromBlog;
