import { useState, React } from "react";
import "./userProfile.css";
import abm from '../images/abm.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faVenus,
  faMars,
  faNeuter,
  faHome,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const UserProfile =()=>{

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
                <p className="udP">WhooLiams@gmail.com</p>
                </div>
                </div>
            </div>
            <div className="btmBlc">
                <div className="bio">
                    <p id="fname">Anna Williams</p>
                    <p id="uname">@anna_Whooliams</p>
                    <p id="bioo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nobis ipsum temporibus laboriosam recusandae odio, id eveniet commodi aspernatur, velit tempora distinctio soluta rem, dolorum aliquam ratione illum totam ea?</p>
                </div>
                <div className="myPost">
                    <p className="Ht">My Post</p>
                    <div className="Post_card">
                        
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}
export default UserProfile;