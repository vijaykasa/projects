 import React from "react";
 import {Link} from "react-router-dom"
import { deleteTask } from "../store/reducer";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";



 const List=({tasks})=>{
    const dispatch=useDispatch()
    return(
        
        <ul className="task_List">
            {tasks.length==0 ? <li >task List is empty</li>:tasks.map((ele,i)=><li key={i}>{i+1+"."+ele} <Link className="btn_1" to={"/Edit/:"+i}>edit</Link><button className="btn_2" onClick={()=>{dispatch(deleteTask(i));toast("task is deleted")}}>delete</button></li>)}
          <ToastContainer/>
        </ul>
    )
 
}
export default List