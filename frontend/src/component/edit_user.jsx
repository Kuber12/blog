import React from "react";
import "./edit_user.css";
import User_edit from "./User_edit";
import edit_userVali from "./edit_userVali";


const EditUser=()=>{
    const { handleEChange,handleESubmit,editData, Eerrors } =User_edit(edit_userVali);
    return(
        <div className="Edit_container">
            <h3>Edit Your Information</h3>
            <div className="Edit_form">
                <form className="editform" onSubmit={handleESubmit}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" placeholder="Username"
                    value={editData.username}
                    onChange={handleEChange} /><br/>
                     <div className="err_m">
            {Eerrors.username && (<span className="tooltiptext">{Eerrors.username}</span>)}
            </div> 


                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder="Name"
                        value={editData.name}
                        onChange={handleEChange}
                    /><br/>
            <div className="err_m">{Eerrors.name && <span className="tooltiptext">{Eerrors.name}</span>}</div>


                    <label htmlFor="dob">Date of Birth: </label>
                    <input type="date" name="dob"
                        value={editData.dob}
                        onChange={handleEChange}
                    /><br/>
                    
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" placeholder="Email"
                         value={editData.email}
                         onChange={handleEChange}
                    /><br/>
            <div className="err_m">{Eerrors.email && <span className="tooltiptext">{Eerrors.email}</span>}</div>


                    <label htmlFor="address">Address: </label>
                    <input type="text" name="address" placeholder="Address"
                         value={editData.address}
                        onChange={handleEChange}
                    /><br/>
            <div className="err_m">{Eerrors.address && <span className="tooltiptext">{Eerrors.address}</span>}</div>


                    <label htmlFor="gender">Gender</label>
                    <div className="gender-option">
                        <label htmlFor="male">Male:</label>
                        <input type="radio" name="gender" value="male" id="male" />
                        
                    </div>

                    <div className="gender-option">
                        <label htmlFor="female">Female:</label>
                        <input type="radio" value="female" name="gender" id="female" />
                        
                    </div>

                    <div className="gender-option">
                        <label htmlFor="other">Other:</label>
                        <input type="radio" value="other" name="gender" id="other" />
                        
                    </div>
            <div className="err_m">{Eerrors.gender && <span className="tooltiptext"> {Eerrors.gender}</span>}</div>

          

                    <input type="submit" name="submit" value="Done" id="submitBtn"/>
                </form>
            </div>
        </div>
    );
}
export default EditUser;