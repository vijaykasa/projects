import React from "react";
import "../header/navbar.css"
import {RxHamburgerMenu} from "react-icons/rx"
import {BsSearch} from "react-icons/bs"
import {BsFillCameraVideoFill} from "react-icons/bs"
import {GrApps} from "react-icons/gr"
import {IoIosNotifications} from "react-icons/io"
import {CgProfile} from "react-icons/cg"

const Navbar=()=>{
    return <>
     <nav className="d-flex  align-items-center justify-content-between">
        <div className="header-logo">
        <RxHamburgerMenu/>
         <img src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png" alt="logo"/>
         </div>
         <div className="header-search">
         <form>
            <input type="text"  placeholder="search" />
            <button><BsSearch/></button>
         </form>
         </div>
         
         <ul className="header-icons d-flex align-items-center justify-content-between">
            <li><BsFillCameraVideoFill/></li>
            <li><GrApps/></li>
            <li><IoIosNotifications/></li>
            <li><CgProfile/></li>
         </ul>
     </nav>
    </>
}

export default Navbar;