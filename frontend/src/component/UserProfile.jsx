import { useState, React } from "react";
import "./userProfile.css";
import abm from '../images/abm.png';
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
                <div className="User_Dtl"></div>
                <div className="User_Dtl"></div>
                <div className="User_Dtl"></div>
                <div className="User_Dtl"></div>
                </div>
            </div>
            <div className="btmBlc">
                <div className="bio">

                </div>
                <div className="myPost">

                </div>
            </div>
            
        </div>
        </>
    );
}
export default UserProfile;