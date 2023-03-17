import React from "react";
import "../boody/home.css";
import {AiFillHome} from "react-icons/ai";
import {BsFire} from "react-icons/bs";
import {MdSubscriptions} from "react-icons/md";
import {GrHistory} from "react-icons/gr";
import {AiTwotoneLike}   from "react-icons/ai";
import {MdLibraryAddCheck} from "react-icons/md";
import {BsClockHistory} from "react-icons/bs"
 import Videos from "./videos";




const Home = () => {
    return <>
       <div className="main-body">
           <div className="sidebar">
            <div className="sidebar-categories">
                <div className="sidebar-category">
                        <AiFillHome/>
                        <span>home</span>
                </div>
                <div className="sidebar-category">
                        <BsFire/>
                        <span>trending</span>
                </div>
                <div className="sidebar-category">
                        <MdSubscriptions/>
                        <span>subscription</span>
                </div>
                 <hr/>
                 <div className="sidebar-category">
                        <MdLibraryAddCheck/>
                        <span>Library</span>
                </div>
                <div className="sidebar-category">
                        <GrHistory/>
                        <span>History</span>
                </div>
                <div className="sidebar-category">
                        <MdSubscriptions/>
                        <span>Your videos</span>
                </div>
                <div className="sidebar-category">
                        <BsClockHistory/>
                        <span>Watch later</span>
                </div>
                <div className="sidebar-category">
                        <AiTwotoneLike/>
                        <span>Liked videos</span>
                </div>
                <hr/>
            </div>
           </div>
           <div className="videos">
            <h3>Recommended</h3>
            <div className="video-container">
                <Videos/> 

            </div>
               
           </div>
       </div>
    </>
}

export default Home;