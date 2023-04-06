import { createSlice } from "@reduxjs/toolkit";


const defaultStore={
    tasks:["task"]
}


const taskSlice=createSlice({
    name:"tasks",
    initialState:defaultStore,
    reducers:{
        addTask:(state,action)=>{
             let newtask=[...state.tasks]
             newtask.push(action.payload)
             state.tasks= newtask
        },
        deleteTask:(state,action)=>{
            console.log("work")
            let updatedList=state.tasks.filter((ele,i)=>i!==action.payload)
            state.tasks=updatedList
        },
        updateTask:(state,action)=>{
            console.log(action.payload)
            let newtask=[...state.tasks]
            newtask[action.payload.id]=action.payload.task

            state.tasks=newtask
        }
    }
})

export const {addTask,deleteTask,updateTask}=taskSlice.actions
export default taskSlice.reducer
