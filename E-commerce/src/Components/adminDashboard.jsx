import React, { useEffect, useState } from 'react'
import "../CSS/dashboard.css"
import { Route, Routes, Link, BrowserRouter, Outlet, useNavigate } from 'react-router-dom'
import { MyConsumer } from './Authcomponent'


export default function AdminDashboard() {
    const{user,setLoged,type,userData}=MyConsumer()
    const [data,setData]=useState({})
const navigate=useNavigate()
    const getData = async () => {
        let response = await (
          await fetch("http://localhost:5050/users/" + user.id)
        ).json()
        setData(response)
    }
    const logout=()=>{
        setLoged(false)
    
        // navigate("/login")
    }
    useEffect(()=>{
         getData()
    },[])
  

  return (
    <div className='container d-flex my-5'>
      <div className='right border'>
      <div className="wrapper">
        <div className='profile'>
            <img className="profileimg"src={userData.image} alt="profile"/> 
        </div>
        <h1>{user.id}</h1>
        </div>
        <hr className='mx-3'/>
        {(type==="adminuser") ? (<ul className='menu'>
            <li><Link to="/Dashboard/myaccount" className='nav-link'>My Account</Link></li>
            <li><Link to="/Dashboard/statistics" className='nav-link'>Statistics</Link></li>
            <li>Employee data</li>
            <li><Link to="/Dashboard/products" className='nav-link'>Products list</Link></li>
            <li>Add employee data</li>
            <li>Add products</li>
            <li onClick={logout}>Log out</li>
        </ul>):(<ul className='menu'>
            <li><Link to="/Dashboard/myaccount" className='nav-link'>My Account</Link></li>
            <li><Link to="/Dashboard/curt" className='nav-link'>Mycart</Link></li>
            <li onClick={logout}>Log out</li>
        </ul>)}
        
      </div>
      <div className='left  border'>
      <Outlet/>
      </div>
    </div>
  )
}
