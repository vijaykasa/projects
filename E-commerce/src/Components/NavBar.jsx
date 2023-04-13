import React from "react";
import "../CSS/Navbar.css";
import { FaShoppingCart, FaUser,FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MyConsumer } from "./Authcomponent";

const NavBar = () => {
  const navigate=useNavigate()
  const { user, loged,setSearch } = MyConsumer();
  const handlechange=(e)=>{
    setSearch(e.target.value)
    
  }
  const handlesubmit=()=>{
    navigate('/search')
  }
  return (
    <div className="main-navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img
            src="./tech2.jpeg"
            alt="TechGys"
            id="techguy"
            style={{
              height: 80,
              width: 110,
              borderRadius: 8,
              paddingLeft: "15px",
            }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex flex-column" id="navbarNav">
          
          <div className="ms-lg-auto searchbar">
          <input
                className=" form-control"
                  type="text"
                  id="searchbox"
                  placeholder="search for products..."
                  // style={{ borderRadius: 30 }}
                  onChange={(e)=>{handlechange(e)}}
                />
                <div className="btn btn-primary btn-sm" onClick={handlesubmit}> <FaSearch /></div>
               
          </div>
               
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/men"} className="nav-link">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/women"} className="nav-link">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/kids"} className="nav-link">
                  Kids
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/homeliving"} className="nav-link">
                  Home&living
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/beauty"} className="nav-link">
                  Beauty
                </Link>
              </li>
             
              {!loged ? (
                <li className="nav-item">
                  <Link to="/login" className="nav-link active">
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                <Link to="/Dashboard" className="nav-link active">
                <FaUser/>{user.id}
                  </Link></li>)}
              <li className="nav-item">
                <Link to={"/registration"} className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item" id="icon">
              <Link to={"/cart"} className="nav-link"><FaShoppingCart /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
