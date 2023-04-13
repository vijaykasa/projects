import React, { useEffect } from "react";
import { createContext } from "react";
import { useContext ,useState} from "react";

const MyContext = createContext()

export const MyProvider = ({children})=>{
    const [search,setSearch]=useState("")
    const [user, setUser] = useState({
        id: "",
        password: "",
      });

      const [loged,setLoged]=useState(false)
      const [userData,setUserdata]=useState()
      const [type, setType] = useState("users");
      const getData=async ()=>{
        let response=await (await fetch("http://localhost:5050/"+type+"/"+user.id)).json();
        setUserdata(response)
      }
    useEffect(() => {
        getData()
    }, [user]);
    
    return <MyContext.Provider value={{user,setUser,loged,setLoged,userData,type, setType,search,setSearch}}>
        {children}
    </MyContext.Provider>
}

export const MyConsumer=()=>{
    return useContext(MyContext)
}