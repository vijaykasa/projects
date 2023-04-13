import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../CSS/registration.css'

export default function Registration() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    fullname: "",
    email: "",
    password: "",
    Cpassword: "",
    number: "",
  });
  const handlechange = (e) => {
    const newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setUser(newuser);
  };
  const adduser = () => {
    let result = true;
    for (let i in user) {
      if (user[i] === "" || user[i] === null) {
        result = false;
        alert("please fill required fileds " + i);
        break;
      }
    }if(user.password!==user.Cpassword){
        
        result = false;
        alert("password and confirm password not matched")
    }else{
        sendData(result)
    }
  };
  const sendData=(result)=>{
    if (result) {
          fetch("http://localhost:5050/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "content-Type": "application/json",
            },
          })
            .then((res) => {
              alert("your succussfully registred");
              navigate("/login");
            })
            .catch((err) => {
              alert("server busy please try later");
            });
        }
  }
  return (
    <div className="container w-50 my-5">
      <div className="card text-start">
        <div className="card-header">Registration</div>
        <div className="card-body ms-5">
          <form>
            <label className="form-label">User Name :</label>
            <input
              className="form-control w-75"
              type={"text"}
              name="id"
              value={user.id}
              placeholder="Enter username like vijay98"
              onChange={(e) => {
                handlechange(e);
              }}
            />
            <label className="form-label">Full Name :</label>
            <input
              className="form-control w-75"
              type={"text"}
              name="fullname"
              value={user.fullname}
              placeholder="enter fullname"
              onChange={(e) => {
                handlechange(e);
              }}
            />
            <label className="form-label">Email :</label>
            <input
              className="form-control w-75"
              type={"text"}
              name="email"
              value={user.email}
              placeholder="email@gmail.com"
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
              placeholder="enter password"
              onChange={(e) => {
                handlechange(e);
              }}
            />
            <label className="form-label">Confirm Password :</label>
            <input
              className="form-control w-75"
              type={"password"}
              name="Cpassword"
              value={user.Cpassword}
              onChange={(e) => {
                handlechange(e);
              }}
            />
            <label className="form-label">Mobile Number :</label>
            <input
              className="form-control w-75"
              type={"number"}
              name="number"
              value={user.number}
              placeholder="enter number"
              onChange={(e) => {
                handlechange(e);
              }}
            />
          </form>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-success btn-sm" onClick={adduser}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
