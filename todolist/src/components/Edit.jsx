import React from "react";
import "./edit.css"
import { useParams,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { updateTask } from "../store/reducer";


const Edit=()=>{
    const param=useParams()
    console.log(param.id.split("")[1])
    const [task,setTask]=useState(useSelector((state)=>state.tasks[param.id.split("")[1]]))
    console.log(task)
    const dispatch=useDispatch()
    const navigate=useNavigate()
   
   const update=()=>{
     dispatch(updateTask({id:param.id.split("")[1],task:task}))
     navigate("/")
   }
   
 return (
    <div className="App">
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button className="btn" onClick={()=>update()}>update</button><br></br>
    </div>
 )
}

export default Edit