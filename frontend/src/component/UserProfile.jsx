import { useState, React ,useEffect, useContext,useDebugValue} from "react";
import "./userProfile.css";
import abm from '../images/abm.png';
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
const UserProfile =()=>{
    const[Data, setData] =useState([]);
    const[Error, setError] =useState("");
    const data_ = useContext(GlobalContext);
    const imagePath = "../../uploads/";


    useEffect(()=>{
        axios.get("http://localhost:5000/api/blog")
        .then((res)=>{
        //console.log(res.data.message);
            setData(res.data.message);
        }).catch((err)=>setError(err.message));
    },[]);

    return(
        <>
        <div id='mainBody'>
            <div className="btwnBlc">
                <div className="Profile">
                </div>
                <div className="follow_me">
                    <button className="Fbtn">
                     Follow Me +
                    </button>
                </div>
                 <div className="aboutMe">
                <img src={abm} id="im"/>
                <div className="User_Dtl">
                    <FontAwesomeIcon icon={faCakeCandles} className="ics"/>
                    <p className="udP">2000.04.10</p>
                </div>
                <div className="User_Dtl">
                <FontAwesomeIcon icon={faVenus} className="ics"/>
                <p className="udP">Female</p>
                </div>
                <div className="User_Dtl">
                <FontAwesomeIcon icon={faHome} className="ics"/>
                <p className="udP">Kentucky, U.S.A</p>
                </div>
                <div className="User_Dtl">
                <FontAwesomeIcon icon={faEnvelope} className="ics"/>
                <p className="udP">whooliams@gmail.com</p>
                </div>
                </div>
            </div>
            <div className="btmBlc">
                <div className="bio">
                {Error!='' && <h6>{Error}</h6>}
                    <p id="fname"> {data_.name ? data_.name : ""} </p>
                    <p id="uname">@{data_.username ? data_.username : ""}</p>
                   {/* bio form ma add vako xaina */}
                    <p id="bioo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nobis ipsum temporibus laboriosam recusandae odio, id eveniet commodi aspernatur, velit tempora distinctio soluta rem, dolorum aliquam ratione illum totam ea?</p>
                </div>
                <div className="myPost">
                    <p className="Ht">My Post</p>
                    <div className="Blog_disp">
                    {Data.slice(0,4).map((post)=>{
                        const{id}=post;
                            return(
                    <div className="cardss" key={id}>
                        <div class="picc">
                        <img src={`${imagePath}${post.image}`}/>
                        </div>
                        <div id="heading">
                            <h1>{post.headline.toUpperCase()}</h1>
                        </div>
                        <div id="tags">
                            <div>
                                <h5> @{post.tag}</h5>
                                <h6>1 Hour Ago</h6>
                            </div>
                        </div>
                    </div>
                            )
                    })}
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}
export default UserProfile;