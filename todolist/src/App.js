
import './App.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import List from './components/list';
import { addTask } from './store/reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [task, setTask] = useState("")
  const [check, setCheck] = useState(false)

  const dispatch = useDispatch()
  const taskslist = useSelector((state) => state.tasks)
  console.log(taskslist)

  const addlist = () => {
    if (task !== "" && task !== null) {
      setCheck(false)
      dispatch(addTask(task))
      setTask("")
      toast("task is added")
    } else {
      setCheck(true)
    }
  }
  return (
    <div className="App">
      <div className="container">
        <input value={task} placeholder="Enter your task" onChange={(e) => { setTask(e.target.value) }} />
        <button onClick={() => { addlist() }} className="btn">ADD TASK</button><br></br>
        {check && <span style={{ marginTop: "5px", color: "red" }}>X add any task</span>}
      </div>
      <List tasks={taskslist} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
