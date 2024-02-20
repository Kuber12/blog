/* The code is defining a functional component called `UserProfile` in JavaScript using React. */
import { useState, React, useEffect, useContext, useDebugValue } from "react";
import "./userProfile.css";
import abm from "../images/abm.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserProfile = () => {
  const data_ = useContext(GlobalContext);
  const imagePath = "../../uploads/";
  const { user } = data_ || {};

  const { username, bio } = user;
  const [hitApi, setHitApi] = useState(1);

  const [editStatus, setEditStatus] = useState(true);
  const [userData, setUserData] = useState({
    address: "",
    dob: "",
    email: "",
    gender: "",
    name: "",
    username: "",
    userImage: "",
  });
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  //fetching user data
  useEffect(() => {
    axios
      .get(`https://blog-backend-3dcg.onrender.com/api/user/${username}/user`)
      .then((res) => {
        setUserData(res.data.message);
        // console.log(res);
      });
  }, [hitApi]);

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
    userData?.gender === "female"
      ? faVenus
      : userData?.gender === "male"
      ? faMars
      : faNeuter;

  const genderText =
    userData?.gender === "female"
      ? "Female"
      : userData?.gender === "male"
      ? "Male"
      : "Other";
  // Default
  const [imageSrc, setImageSrc] = useState("../../uploads/Profile.png");
  // const [imageSrc, setImageSrc] = useState(userData.userImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageSrc(URL.createObjectURL(file));
      setImageUpload(e.target.files[0]);
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };
  const handleSave = () => {
    // setIsEditing(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  const token = sessionStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };
  let tempFileName;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageUpload) {
      toast.success("Please wait");
      const imageRef = ref(storage, `user/${imageUpload + v4()}`);
      uploadBytes(imageRef, imageUpload)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            tempFileName = url;
            toast.success("Updaded");
            console.log(url);
            return axios
              .put(
                `https://blog-backend-3dcg.onrender.com/api/user/${username}/edit`,
                { ...userData, userImage: url ? url : "" },
                config
              )
              .then((res) => {
                console.log(res.data.message);
                toast.success(res.data.message);
              });
          });
        })
        .then((res) => {
          toast.success("Success");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
        .catch((ex) => console.log(ex));
    } else {
      axios
        .put(
          `https://blog-backend-3dcg.onrender.com/api/user/${username}/edit`,
          userData,
          config
        )
        .then((res) => {
          console.log(res.data.message);
          toast.success(res.data.message);
        });
    }
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
          {!isEditing && (
            <div className="userprofile-top-container">
              <div className="profile-follow">
                <div className="Profile">
                  <img
                    src={imageSrc}
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
                <p id="fname"> {userData?.name ? userData?.name : ""} </p>
                <p id="uname">
                  @{userData?.username ? userData?.username : ""}
                </p>
                {/* bio form ma add vako xaina */}
                <p id="bioo">{userData?.bio ? userData?.bio : ""}</p>
              </div>
              <div className="aboutMe">
                <img src={abm} id="im" />
                {/* birthday */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faCakeCandles} className="ics" />
                  <span className="udP">{userData?.dob?.slice(0, 10)}</span>
                </div>

                {/* gender */}
                <div className="User_Dtl">
                  {icon && <FontAwesomeIcon icon={icon} className="ics" />}
                  <span className="udP">{userData?.gender}</span>
                </div>

                {/* address */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faHome} className="ics" />
                  <span className="udP">{userData?.address}</span>
                </div>

                {/* email */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faEnvelope} className="ics" />
                  <span className="udP">{userData?.email}</span>
                </div>
              </div>
            </div>
          )}

          {/* editing form  */}
          {isEditing && (
            <form className="userprofile-top-container" onSubmit={handleSubmit}>
              <div className="profile-follow">
                <div className="Profile">
                  <img
                    className="edit-profile-picture"
                    // src={userData.userImage}
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
                    // onClick={handleSave}
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
                {/* name edit */}
                <input
                  name="name"
                  type="text"
                  id="fname"
                  onChange={handleChange}
                  value={userData?.name}
                />
                {/* username edit  */}
                {/* <input
                  name="username"
                  type="email"
                  id="fname"
                  style={{ marginBottom: "10px" }}
                  onChange={handleChange}
                  value={`${userData?.username}`}
                /> */}
                <p id="uname">
                  @{userData?.username ? userData?.username : ""}
                </p>
                {/* bio form ma add vako xaina */}
                {/* bio edit */}
                <textarea
                  name="bio"
                  onChange={handleChange}
                  rows={5}
                  cols={50}
                  id="bioo"
                  value={bio}
                />
              </div>
              <div className="aboutMe">
                <img src={abm} id="im" />
                {/* birthday */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faCakeCandles} className="ics" />
                  {/* dob  edit*/}
                  <input
                    name="dob"
                    type="date"
                    className="udP"
                    value={userData?.dob}
                    onChange={handleChange}
                  />
                </div>

                {/* gender */}
                <div className="User_Dtl">
                  {icon && <FontAwesomeIcon icon={icon} className="ics" />}
                  {/* gender edit  */}
                  {/* <select
                    id="gender"
                    className="udP"
                    onChange={handleChange}
                    name="gender"
                    // value={editedGender}
                    // onChange={(e) => setEditedGender(e.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select> */}
                  Male:{" "}
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  Female:{" "}
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  Other:{" "}
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                  />
                </div>

                {/* address edit */}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faHome} className="ics" />
                  <input
                    className="udP"
                    value={userData?.address}
                    name="address"
                    onChange={handleChange}
                  />
                </div>

                {/* email edit*/}
                <div className="User_Dtl">
                  <FontAwesomeIcon icon={faEnvelope} className="ics" />
                  <input
                    className="udP"
                    name="email"
                    value={userData?.email}
                    onChange={handleChange}
                  />
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
