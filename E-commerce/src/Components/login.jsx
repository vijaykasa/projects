import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { MyConsumer } from "./Authcomponent";


export default function Login() {
    const navigate=useNavigate()
  const [login, setlogin] = useState("User Login");
 
  const {user,setUser,setLoged,type, setType}=MyConsumer()

  const handlechange = (e) => {
    const newuser={...user}
    newuser[e.target.name]=e.target.value
     setUser(newuser);
  };
  const validation=()=>{
    if(user.id === ""||user.id === null){
        alert("enter valid username")
    }else if(user.password === ""||user.password === null){
        alert("enter valid password")
    }else{
        getData()
    }
  }
  const getData=async ()=>{
    let response=await (await fetch("http://localhost:5050/"+type+"/"+user.id)).json();
    if(Object.keys(response).length === 0){
        alert("username and password not matched")
    }else if(Object.keys(response).length>1){
        if(response.password===user.password){
            setLoged(true)
            navigate('/Dashboard')
        }else{
            alert("your password is incorrect")
        }
    }
  }
  const userLogin=()=>{
       setlogin("User Login")
       setType("users")
  }
  const adminLogin=()=>{
    setlogin("Admin Login")
    setType("adminuser")
}
  
  return (
    <div className="container w-50 my-5">
     <button className="btn btn-primary btn-sm me-3 mb-5" onClick={userLogin}>user Login</button>
     <button className="btn btn-primary btn-sm mb-5" onClick={adminLogin}>adminLogin</button>
      <div className="card text-start">
        <div className="card-header">{login}</div>
        <div className="card-body ms-5">
        <form>
          <label className="form-label">User Name :</label>
          <input
            className="form-control w-75"
            type={"text"}
            name="id"
            value={user.id}
            placeholder="Enter username"
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <label className="form-label">Password :</label>
          <input
            className="form-control w-75"
            type={"password"}
            name="password"
            value={user.password}
            placeholder="Enter password"
            onChange={(e) => {
              handlechange(e);
            }}
          />
          </form>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-primary btn-sm" onClick={validation}>Login</button>
          <span>{" "}|{" "}</span>
          <Link className="btn btn-success btn-sm" to='/registration'>New user</Link>
           <a href="#" className="float-end mt-1" >forget password</a>
        </div>
      </div>
    </div>
  );
}
