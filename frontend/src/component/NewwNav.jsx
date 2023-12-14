import React from 'react'
import './navi.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faBars} from "@fortawesome/free-solid-svg-icons";

const NewNavi=()=>{
    return(
                <div className='navbar'>
                <a href='/' className='logo'>Blog</a>
                <input type="checkbox" id="menuBt"/>
                <label htmlFor='menuBt' className='icon'><FontAwesomeIcon icon={faBars}/></label>
                    <ul>
                        <li><a href="/" className='active'>Home</a></li>
                        <li><a href="/">Create</a></li>
                        <li><a href="/">Edit</a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faUser}/></a></li>
                    </ul>     
                </div> 
    );
}
export default NewNavi;